import { UploadForm } from "@/components/upload-form"
import { RetroWindow } from "@/components/retro-window"

export default function UploadPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] p-4">
      <RetroWindow title="Subir Archivo" className="max-w-md w-full">
        <UploadForm />
      </RetroWindow>
    </div>
  )
}
