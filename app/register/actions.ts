"use server"

import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

// Verificar que las variables de entorno existen
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    })
  : null

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    console.error("❌ Email y contraseña son requeridos")
    redirect("/register?error=missing-fields")
  }

  if (!supabase) {
    console.error("❌ Supabase client not initialized - missing environment variables")
    redirect("/register?error=service-unavailable")
  }

  try {
    // Crear usuario en Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirmar el email para desarrollo
    })

    if (error) {
      console.error("❌ Error creating user:", error.message)
      redirect(`/register?error=${encodeURIComponent(error.message)}`)
    }

    console.log("✅ User created successfully:", data.user?.id)

    // Opcional: Crear entrada en tabla users si existe
    try {
      const { error: insertError } = await supabase
        .from("users")
        .insert({
          id: data.user!.id,
          email: data.user!.email,
          is_admin: email === "albberca@example.com", // Hacer admin al primer usuario
        })

      if (insertError) {
        console.warn("⚠️ Could not insert user profile:", insertError.message)
      }
    } catch (profileErr) {
      console.warn("⚠️ User profile table might not exist:", profileErr)
    }

    // Redirigir al login con mensaje de éxito
    redirect("/login?success=user-created")
  } catch (err) {
    console.error("❌ Unexpected error:", err)
    redirect("/register?error=unexpected-error")
  }
}
