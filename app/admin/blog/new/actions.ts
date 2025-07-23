"use server"

import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"

// Asegúrate de que estas variables de entorno estén disponibles en el servidor
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Inicializa el cliente de Supabase con la clave de rol de servicio
// ¡IMPORTANTE! Esta clave solo debe usarse en el servidor.
const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: { persistSession: false },
      })
    : null

export async function createBlogPost(formData: FormData) {
  if (!supabase) {
    return { success: false, message: "Error: Cliente de Supabase no inicializado." }
  }

  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const imageUrl = formData.get("imageUrl") as string
  const imageAlt = formData.get("imageAlt") as string
  const content = formData.get("content") as string
  const date = formData.get("date") as string // Asume que la fecha viene del formulario

  if (!title || !slug || !description || !content || !date) {
    return { success: false, message: "Todos los campos obligatorios deben ser rellenados." }
  }

  try {
    const { data, error } = await supabase.from("blog_posts").insert([
      {
        title,
        slug,
        description,
        image_url: imageUrl,
        image_alt: imageAlt,
        content,
        published_at: date, // Asegúrate de que el nombre de la columna coincida con tu tabla
      },
    ])

    if (error) {
      console.error("Error al insertar la entrada del blog:", error.message)
      return { success: false, message: `Error al crear la entrada: ${error.message}` }
    }

    // Revalidar la ruta principal para que la nueva entrada aparezca en el blog
    revalidatePath("/blog") // Revalidar la nueva página del blog

    return { success: true, message: "Entrada de blog creada con éxito!" }
  } catch (error) {
    console.error("Error inesperado al crear la entrada del blog:", error)
    return { success: false, message: "Error inesperado al crear la entrada del blog." }
  }
}
