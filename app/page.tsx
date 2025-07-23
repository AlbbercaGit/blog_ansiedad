// REMOVER "use client" para que sea un Server Component
// "use client"

import Image from "next/image"

// Importar los nuevos Client Components
import { TimelineSection } from "@/components/timeline-section"
import { MusicalStyleSection } from "@/components/musical-style-section"
import MembersPage from "./members/page" // MembersPage ya es un Client Component

import { createClient } from "@supabase/supabase-js" // Importar cliente Supabase

// Inicializar cliente Supabase para la obtención de datos del lado del servidor
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseAnonKey ? createClient<any>(supabaseUrl, supabaseAnonKey) : null

const timelineEvents = [
  {
    year: 1985,
    title: "Formación de Ansiedad Caramelizada",
    description:
      "En un sótano húmedo y lleno de humo, cuatro almas melancólicas se unieron para dar voz a la desesperación de una generación. Nace el post-punk más dulce y amargo.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1985",
    imageAlt: "Banda Ansiedad Caramelizada ensayando en un sótano en 1985",
  },
  {
    year: 1986,
    title: "Lanzamiento de 'Ecos del Vacío' (EP)",
    description:
      "Nuestro primer EP, grabado con equipos prestados y mucha cafeína. Cuatro temas que definieron nuestro sonido: sintetizadores fríos, guitarras afiladas y letras existenciales.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1986",
    imageAlt: "Portada del EP 'Ecos del Vacío'",
  },
  {
    year: 1987,
    title: "Primera Gira 'Sombras Urbanas'",
    description:
      "Recorrimos los clubes más oscuros de la ciudad, llevando nuestro mensaje de melancolía y ruido. Cada concierto era una catarsis colectiva, un ritual de liberación.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1987",
    imageAlt: "Concierto de Ansiedad Caramelizada en 1987",
  },
  {
    year: 1988,
    title: "Grabación de 'Distorsión Interior' (Álbum)",
    description:
      "Nuestro primer álbum de larga duración. Meses de encierro en el estudio, explorando nuevas texturas sonoras y profundizando en los abismos de la psique humana.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1988",
    imageAlt: "Estudio de grabación analógico en 1988",
  },
  {
    year: 1989,
    title: "Festival 'Ruido y Ceniza'",
    description:
      "Fuimos cabeza de cartel en el festival underground más importante del año. Una noche épica donde la lluvia y el feedback se fusionaron en una experiencia inolvidable.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1989",
    imageAlt: "Festival 'Ruido y Ceniza' en 1989",
  },
]

const musicalStyleSections = [
  {
    title: "Sonido",
    description:
      "El sonido de Ansiedad Caramelizada se caracteriza por sus guitarras reverberadas y afiladas, líneas de bajo hipnóticas y pulsantes, baterías mecánicas y frías, y sintetizadores atmosféricos que construyen paisajes sonoros densos y envolventes. La voz, a menudo distante y cargada de emoción, se funde con la instrumentación para crear una experiencia inmersiva. La producción busca una crudeza lo-fi que evoca la era analógica.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/guitar",
    imageAlt: "Guitarra retro en blanco y negro",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    title: "Letras",
    description:
      "Las letras de Ansiedad Caramelizada son un espejo de la melancolía urbana y la introspección existencial. Abordamos temas como la alienación, la búsqueda de identidad en un mundo en constante cambio, y la belleza encontrada en la desolación. Cada verso es un grito ahogado, una reflexión sobre la fragilidad humana y la resistencia del espíritu. Nos inspiramos en la poesía oscura, el cine noir y las calles grises de la ciudad.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live2",
    imageAlt: "Máquina de escribir vintage",
    social: null,
  },
  {
    title: "Referencias",
    description:
      "Nuestra música es un crisol de influencias que van desde el post-punk británico de los 80 (Joy Division, The Cure, Siouxsie and the Banshees) hasta el krautrock experimental (Can, Neu!) y la new wave más oscura. También bebemos de la literatura de Camus y Kafka, y de la estética visual de películas como Blade Runner y Eraserhead. Buscamos crear un sonido que sea a la vez familiar y extrañamente nuevo.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live",
    imageAlt: "Discos de vinilo vintage",
    social: null,
  },
  {
    title: "Directo",
    description:
      "Nuestros conciertos son más que una simple actuación; son un ritual catártico. La iluminación tenue, el humo denso y las proyecciones abstractas crean una atmósfera inmersiva que transporta al público a nuestro universo sonoro. La energía en el escenario es cruda y visceral, invitando a la audiencia a perderse en el ritmo y la emoción. Cada directo es una oportunidad para conectar y liberar la ansiedad colectiva.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live2",
    imageAlt: "Concierto de banda con luces de escenario",
    social: null,
  },
]

export default async function HomePage() {
  // <--- Ahora es un Server Component asíncrono

  // Obtener entradas de blog desde Supabase en el servidor
  // Ya no se necesita aquí, se moverá a app/blog/page.tsx
  // let blogPosts: BlogPost[] = []
  // if (supabase) {
  //   const { data, error } = await supabase
  //     .from("blog_posts")
  //     .select("id, title, slug, description, image_url, image_alt, content, published_at") // Asegúrate de seleccionar todas las columnas necesarias
  //     .order("published_at", { ascending: false }) // Ordenar por fecha de publicación descendente

  //   if (error) {
  //     console.error("Error fetching blog posts:", error.message)
  //   } else {
  //     blogPosts = data || []
  //   }
  // } else {
  //   console.warn(
  //     "Supabase client not initialized for fetching blog posts on homepage. Check SUPABASE_URL and SUPABASE_ANON_KEY.",
  //   )
  // }

  return (
    <div className="flex flex-col w-full">
      {/* Primera Sección: Hero con imagen de fondo y nombre de la banda */}
      <section className="relative flex items-center justify-center w-full min-h-[calc(100vh-8rem)] bg-retro-black text-retro-white overflow-hidden">
        <Image
          src="https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/portada"
          alt="Ansiedad Caramelizada - Banda Post-Punk"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-70"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-lg break-words">
          Ansiedad Caramelizada
        </h1>
      </section>

      {/* Segunda Sección: Línea de tiempo (Client Component) */}
      <TimelineSection timelineEvents={timelineEvents} />

      {/* Tercera Sección: Miembros (Client Component) */}
      <MembersPage />

      {/* Cuarta Sección: Estilo Musical (Client Component) */}
      <MusicalStyleSection musicalStyleSections={musicalStyleSections} />

    </div>
  )
}
