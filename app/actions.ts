"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File

  if (!file) {
    return { success: false, message: "No se ha seleccionado ningún archivo." }
  }

  try {
    // 'put' sube el archivo a Vercel Blob.
    // El primer argumento es el nombre del archivo en Blob.
    // El segundo argumento es el archivo en sí.
    // 'access: public' hace que el archivo sea accesible públicamente.
    // 'addRandomSuffix: true' añade un sufijo aleatorio para evitar conflictos de nombres.
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    })

    // Opcional: revalidar la ruta si la subida afecta el contenido de una página
    revalidatePath("/")

    return { success: true, message: "Imagen subida con éxito!", url: blob.url }
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    return { success: false, message: "Error al subir la imagen." }
  }
}
