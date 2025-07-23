"use client"

import { useActionState } from "react"
import { createBlogPost } from "@/app/admin/blog/new/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function BlogPostForm() {
  const [state, formAction, isPending] = useActionState(createBlogPost, null)

  // Obtener la fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0]

  return (
    <form action={formAction} className="flex flex-col gap-4 p-4 text-retro-black">
      <h2 className="text-xl font-bold">Crear Nueva Entrada</h2>
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Título
        </label>
        <Input
          id="title"
          name="title"
          type="text"
          required
          className="border-2 border-retro-black bg-retro-white text-retro-black"
          placeholder="El Origen del Ruido"
        />
      </div>
      <div>
        <label htmlFor="slug" className="block text-sm font-medium mb-1">
          Slug (URL amigable)
        </label>
        <Input
          id="slug"
          name="slug"
          type="text"
          required
          className="border-2 border-retro-black bg-retro-white text-retro-black"
          placeholder="el-origen-del-ruido"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descripción Corta
        </label>
        <Textarea
          id="description"
          name="description"
          required
          className="border-2 border-retro-black bg-retro-white text-retro-black min-h-[80px]"
          placeholder="Un viaje a los inicios de Ansiedad Caramelizada..."
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
          URL de la Imagen (opcional)
        </label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          className="border-2 border-retro-black bg-retro-white text-retro-black"
          placeholder="https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/mi-imagen"
        />
        <p className="text-xs text-retro-gray-dark mt-1">
          Puedes subir una imagen en la página de{" "}
          <a href="/upload" className="underline">
            Subir Archivo
          </a>{" "}
          y pegar la URL aquí.
        </p>
      </div>
      {/* NUEVO: Campo para el texto alternativo de la imagen */}
      <div>
        <label htmlFor="imageAlt" className="block text-sm font-medium mb-1">
          Texto Alternativo de la Imagen (opcional)
        </label>
        <Input
          id="imageAlt"
          name="imageAlt"
          type="text"
          className="border-2 border-retro-black bg-retro-white text-retro-black"
          placeholder="Descripción de la imagen para accesibilidad"
        />
        <p className="text-xs text-retro-gray-dark mt-1">
          Texto descriptivo para la imagen (importante para SEO y accesibilidad).
        </p>
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Contenido de la Entrada
        </label>
        <Textarea
          id="content"
          name="content"
          required
          className="border-2 border-retro-black bg-retro-white text-retro-black min-h-[200px]"
          placeholder="Escribe aquí el contenido completo de tu entrada de blog..."
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium mb-1">
          Fecha de Publicación
        </label>
        <Input
          id="date"
          name="date"
          type="date"
          required
          defaultValue={today} // Establece la fecha actual por defecto
          className="border-2 border-retro-black bg-retro-white text-retro-black"
        />
      </div>
      <Button type="submit" disabled={isPending} className="retro-button">
        {isPending ? "Creando..." : "Crear Entrada"}
      </Button>
      {state?.message && (
        <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
      )}
    </form>
  )
}
