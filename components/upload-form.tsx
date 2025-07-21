"use client"

import { useActionState } from "react"
import { uploadImage } from "@/app/actions"
import { Button } from "@/components/ui/button" // Asumiendo que tienes un componente Button de shadcn/ui
import { Input } from "@/components/ui/input" // Asumiendo que tienes un componente Input de shadcn/ui

export function UploadForm() {
  const [state, formAction, isPending] = useActionState(uploadImage, null)

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 p-4 border-2 border-retro-black bg-retro-white shadow-[4px_4px_0px_0px_#000000]"
    >
      <h2 className="text-xl font-bold">Subir Nueva Imagen</h2>
      <Input
        id="image"
        name="image"
        type="file"
        required
        className="border-2 border-retro-black bg-retro-white text-retro-black"
      />
      <Button type="submit" disabled={isPending} className="retro-button">
        {isPending ? "Subiendo..." : "Subir Imagen"}
      </Button>
      {state?.message && <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>}
      {state?.url && (
        <p className="text-sm text-retro-black">
          URL de la imagen:{" "}
          <a href={state.url} target="_blank" rel="noopener noreferrer" className="underline">
            {state.url}
          </a>
        </p>
      )}
    </form>
  )
}
