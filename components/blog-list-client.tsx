"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BlogPostCard } from "@/components/blog-post-card"
import type { BlogPost } from "@/types/blog-post" // Importa el tipo BlogPost desde la nueva ubicación

interface BlogListClientProps {
  initialBlogPosts: BlogPost[]
}

const POSTS_PER_PAGE = 5

export function BlogListClient({ initialBlogPosts }: BlogListClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(initialBlogPosts.length / POSTS_PER_PAGE)

  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = initialBlogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const goToNextBlogPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const goToPrevBlogPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return (
    <div className="grid gap-8">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Nuestro Blog</h1>
        <p className="text-base sm:text-lg text-retro-gray-dark">
          Historias, reflexiones y novedades de Ansiedad Caramelizada.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            imageUrl={post.image_url || "/placeholder.svg?height=225&width=400&text=Blog+Post"} // Usar image_url de Supabase
            imageAlt={post.image_alt || post.title} // Usar image_alt de Supabase, o el título como fallback
            description={post.description}
            publishedAt={post.published_at} // Pasar la fecha de publicación
          />
        ))}
      </div>

      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={goToPrevBlogPage}
            disabled={currentPage === 1}
            className="retro-button p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  currentPage === i + 1
                    ? "bg-retro-black text-retro-white"
                    : "bg-retro-gray-light text-retro-black hover:bg-retro-gray-medium"
                }`}
                aria-label={`Ir a la página ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={goToNextBlogPage}
            disabled={currentPage === totalPages}
            className="retro-button p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}
