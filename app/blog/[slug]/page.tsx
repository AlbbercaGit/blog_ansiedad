import { createClient } from "@supabase/supabase-js"
import { notFound } from "next/navigation"
import Image from "next/image"
import { RetroWindow } from "@/components/retro-window"

// Inicializar cliente Supabase para la obtención de datos del lado del servidor
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseAnonKey ? createClient<any>(supabaseUrl, supabaseAnonKey) : null

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  if (!supabase) {
    console.error("Supabase client not initialized for blog post page. Check SUPABASE_URL and SUPABASE_ANON_KEY.")
    notFound() // O manejar el error de otra manera
  }

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*") // Seleccionar todas las columnas para mostrar el contenido completo
    .eq("slug", slug)
    .single()

  if (error || !post) {
    console.error(`Error fetching blog post with slug ${params.slug}:`, error?.message || "Post not found")
    notFound() // Muestra la página 404 de Next.js si no se encuentra la entrada
  }

  // Formatear la fecha para una mejor visualización
  const publishedDate = new Date(post.published_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-8rem)] p-4 bg-retro-white text-retro-black">
      <RetroWindow title={post.title} className="max-w-3xl w-full">
        <article className="flex flex-col gap-6 p-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center">{post.title}</h1>
          <p className="text-sm text-retro-gray-dark text-center">Publicado el: {publishedDate}</p>

          {post.image_url && (
            <div className="relative w-full aspect-video border-2 border-retro-black shadow-[4px_4px_0px_0px_#000000]">
              <Image
                src={post.image_url || "/placeholder.svg"}
                alt={post.image_alt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                style={{ objectFit: "cover" }}
                className="object-center"
                priority
              />
            </div>
          )}

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-retro-black">
            {/* Aquí puedes usar una librería para renderizar Markdown si 'content' es Markdown */}
            {/* Por ahora, lo mostramos como texto plano o HTML si ya viene formateado */}
            <p>{post.content}</p>
          </div>
        </article>
      </RetroWindow>
    </div>
  )
}
