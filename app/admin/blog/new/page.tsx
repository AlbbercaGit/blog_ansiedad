import { RetroWindow } from "@/components/retro-window"
import { BlogPostForm } from "@/components/blog-post-form"

export default function NewBlogPostPage() {
  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-8rem)] p-4 bg-retro-dark-bg text-retro-light-text">
      <RetroWindow title="Admin - Nueva Entrada de Blog" className="max-w-2xl w-full">
        <BlogPostForm />
      </RetroWindow>
    </div>
  )
}
