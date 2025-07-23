import { Suspense } from "react"
import { BlogListServer } from "@/components/blog-list-server"
import { RetroWindow } from "@/components/retro-window"

export default function BlogIndexPage() {
  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-8rem)] p-4 bg-retro-white text-retro-black">
      <RetroWindow title="Nuestro Blog" className="max-w-4xl w-full">
        <Suspense fallback={<div>Cargando entradas del blog...</div>}>
          <BlogListServer />
        </Suspense>
      </RetroWindow>
    </div>
  )
}
