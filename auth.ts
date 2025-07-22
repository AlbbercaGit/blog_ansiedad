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
if (!process.env.SUPABASE_URL) {
  throw new Error(
    "SUPABASE_URL no está definida. Añade SUPABASE_URL en tu .env.local o en las variables de entorno de Vercel.",
  )
}
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "SUPABASE_SERVICE_ROLE_KEY no está definida. Añade SUPABASE_SERVICE_ROLE_KEY en tu .env.local o en las variables de entorno de Vercel.",
  )
}

// ---------------------------------------------------------------------------
// Ahora sí se puede inicializar el cliente con seguridad
// ---------------------------------------------------------------------------
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
})

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!, // Esto es para el adaptador de Supabase
  }),
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
        session.user.email = token.email
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

// Extiende el tipo de JWT para incluir is_admin
declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    is_admin: boolean
  }
}
