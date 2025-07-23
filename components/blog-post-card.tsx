import Image from "next/image"
import Link from "next/link"
import { RetroWindow } from "@/components/retro-window"

interface BlogPostCardProps {
  title: string
  slug: string
  imageUrl: string | null
  imageAlt: string | null
  description: string
  publishedAt: string // Añadimos la fecha de publicación
}

export function BlogPostCard({ title, slug, imageUrl, imageAlt, description, publishedAt }: BlogPostCardProps) {
  // Formatear la fecha para una mejor visualización en la tarjeta
  const date = new Date(publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <RetroWindow title={`Blog Post - ${date}`} className="w-full max-w-sm">
      <div className="grid gap-4">
        <Image
          src={imageUrl || "/placeholder.svg?height=225&width=400&text=Blog+Post"}
          alt={imageAlt || title}
          width={400}
          height={225}
          className="aspect-video object-cover border-2 border-retro-black"
        />
        <div className="grid gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-retro-black">{description}</p>
          <p className="text-xs text-retro-gray-dark">Publicado: {date}</p>
        </div>
        <Link href={`/blog/${slug}`} className="retro-button w-fit">
          Leer más
        </Link>
      </div>
    </RetroWindow>
  )
}
