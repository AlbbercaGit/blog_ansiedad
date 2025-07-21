import Image from "next/image"
import Link from "next/link"
import { RetroWindow } from "./retro-window"

interface ProjectCardProps {
  title: string
  slug: string
  imageUrl: string
  imageAlt: string
  description: string
}

export function ProjectCard({ title, slug, imageUrl, imageAlt, description }: ProjectCardProps) {
  return (
    <RetroWindow title={`2020-04-08-${slug}.html`} className="w-full max-w-sm">
      <div className="grid gap-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={225}
          className="aspect-video object-cover border-2 border-retro-black"
        />
        <div className="grid gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-retro-black">{description}</p>
        </div>
        <Link href={`/projects/${slug}`} className="retro-button w-fit">
          Ver proyecto
        </Link>
      </div>
    </RetroWindow>
  )
}
