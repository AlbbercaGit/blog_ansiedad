// types/blog-post.ts
export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  image_url: string | null
  image_alt: string | null
  content: string
  published_at: string
}
