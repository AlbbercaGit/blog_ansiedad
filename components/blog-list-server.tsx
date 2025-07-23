import { createClient } from "@supabase/supabase-js"
import { BlogListClient } from "./blog-list-client" // Importa el componente cliente
import type { BlogPost } from "@/types/blog-post" // Importa el tipo BlogPost

// Inicializar cliente Supabase para la obtención de datos del lado del servidor
// Usamos la clave ANON_KEY para acceso de solo lectura público
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseAnonKey ? createClient<any>(supabaseUrl, supabaseAnonKey) : null

export async function BlogListServer() {
  let blogPosts: BlogPost[] = []

  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, description, image_url, image_alt, published_at")
      .order("published_at", { ascending: false }) // Ordenar por fecha de publicación descendente

    if (error) {
      console.error("Error fetching blog posts:", error.message)
    } else {
      blogPosts = data || []
    }
  } else {
    console.warn("Supabase client not initialized for fetching blog posts. Check SUPABASE_URL and SUPABASE_ANON_KEY.")
  }

  // Pasa los datos obtenidos al componente cliente
  return <BlogListClient initialBlogPosts={blogPosts} />
}
