import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Credentials from "next-auth/providers/credentials"
import { createClient } from "@supabase/supabase-js"
import type { DefaultSession } from "next-auth"

// ---------------------------------------------------------------------------
// Comprueba que las variables de entorno críticas existen
// ---------------------------------------------------------------------------
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not set. Please set it in your .env.local file or Vercel environment variables.")
}

// Para el build, permitir que las variables de Supabase sean opcionales
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if ((!supabaseUrl || !supabaseServiceKey) && process.env.NODE_ENV !== 'production') {
  console.warn(
    "Supabase variables not found. Authentication will not work properly. " +
    "Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file."
  )
}

// ---------------------------------------------------------------------------
// Ahora sí se puede inicializar el cliente con seguridad
// ---------------------------------------------------------------------------
const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    })
  : null

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: supabaseUrl && supabaseServiceKey 
    ? SupabaseAdapter({
        url: supabaseUrl,
        secret: supabaseServiceKey,
      })
    : undefined,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        if (!supabase) {
          console.error("Supabase client not initialized")
          return null
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email as string,
          password: credentials.password as string,
        })

        if (error) {
          console.error("Error signing in with credentials:", error.message)
          return null
        }

        if (data.user) {
          const { data: profile, error: profileError } = await supabase
            .from("users")
            .select("is_admin")
            .eq("id", data.user.id)
            .single()

          if (profileError) {
            console.error("Error fetching user profile:", profileError.message)
          }

          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.email,
            is_admin: profile?.is_admin || false,
          }
        }

        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email ?? ""
        token.is_admin = (user as any).is_admin
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email || ""
        session.user.is_admin = token.is_admin as boolean
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET, // ¡Esta línea es CRÍTICA y debe estar aquí!
})

// Extiende el tipo de sesión para incluir is_admin
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      is_admin: boolean
    } & DefaultSession["user"]
  }

  interface User {
    is_admin: boolean
  }
}
