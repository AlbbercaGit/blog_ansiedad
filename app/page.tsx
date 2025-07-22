"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown, Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import MembersPage from "./members/page" // Importa el componente MembersPage
import Link from "next/link" // Importar Link para los enlaces sociales
import { ProjectCard } from "@/components/project-card" // Importar ProjectCard

const timelineEvents = [
  {
    year: 1985,
    title: "Formación de Ansiedad Caramelizada",
    description:
      "En un sótano húmedo y lleno de humo, cuatro almas melancólicas se unieron para dar voz a la desesperación de una generación. Nace el post-punk más dulce y amargo.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1985", // Usando la imagen de Blob para 1985
    imageAlt: "Banda Ansiedad Caramelizada ensayando en un sótano en 1985",
  },
  {
    year: 1986,
    title: "Lanzamiento de 'Ecos del Vacío' (EP)",
    description:
      "Nuestro primer EP, grabado con equipos prestados y mucha cafeína. Cuatro temas que definieron nuestro sonido: sintetizadores fríos, guitarras afiladas y letras existenciales.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1986", // Usando la imagen de Blob para 1986
    imageAlt: "Portada del EP 'Ecos del Vacío'",
  },
  {
    year: 1987,
    title: "Primera Gira 'Sombras Urbanas'",
    description:
      "Recorrimos los clubes más oscuros de la ciudad, llevando nuestro mensaje de melancolía y ruido. Cada concierto era una catarsis colectiva, un ritual de liberación.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1987", // Usando la imagen de Blob para 1987
    imageAlt: "Concierto de Ansiedad Caramelizada en 1987",
  },
  {
    year: 1988,
    title: "Grabación de 'Distorsión Interior' (Álbum)",
    description:
      "Nuestro primer álbum de larga duración. Meses de encierro en el estudio, explorando nuevas texturas sonoras y profundizando en los abismos de la psique humana.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1988", // Usando la imagen de Blob para 1988
    imageAlt: "Estudio de grabación analógico en 1988",
  },
  {
    year: 1989,
    title: "Festival 'Ruido y Ceniza'",
    description:
      "Fuimos cabeza de cartel en el festival underground más importante del año. Una noche épica donde la lluvia y el feedback se fusionaron en una experiencia inolvidable.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/1989", // Usando la imagen de Blob para 1989
    imageAlt: "Festival 'Ruido y Ceniza' en 1989",
  },
]

const musicalStyleSections = [
  {
    title: "Sonido",
    description:
      "El sonido de Ansiedad Caramelizada se caracteriza por sus guitarras reverberadas y afiladas, líneas de bajo hipnóticas y pulsantes, baterías mecánicas y frías, y sintetizadores atmosféricos que construyen paisajes sonoros densos y envolventes. La voz, a menudo distante y cargada de emoción, se funde con la instrumentación para crear una experiencia inmersiva. La producción busca una crudeza lo-fi que evoca la era analógica.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/guitar", // Imagen de la guitarra proporcionada
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
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live2", // Imagen de live2
    imageAlt: "Máquina de escribir vintage",
    social: null,
  },
  {
    title: "Referencias",
    description:
      "Nuestra música es un crisol de influencias que van desde el post-punk británico de los 80 (Joy Division, The Cure, Siouxsie and the Banshees) hasta el krautrock experimental (Can, Neu!) y la new wave más oscura. También bebemos de la literatura de Camus y Kafka, y de la estética visual de películas como Blade Runner y Eraserhead. Buscamos crear un sonido que sea a la vez familiar y extrañamente nuevo.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live", // Imagen de live
    imageAlt: "Discos de vinilo vintage",
    social: null,
  },
  {
    title: "Directo",
    description:
      "Nuestros conciertos son más que una simple actuación; son un ritual catártico. La iluminación tenue, el humo denso y las proyecciones abstractas crean una atmósfera inmersiva que transporta al público a nuestro universo sonoro. La energía en el escenario es cruda y visceral, invitando a la audiencia a perderse en el ritmo y la emoción. Cada directo es una oportunidad para conectar y liberar la ansiedad colectiva.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/live2", // Reutilizando live2
    imageAlt: "Concierto de banda con luces de escenario",
    social: null,
  },
]

// Datos de ejemplo para el blog
const blogPosts = [
  {
    slug: "post-1",
    title: "El Origen del Ruido: Nuestros Primeros Días",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+1",
    imageAlt: "Primeros días de la banda",
    description: "Un viaje a los inicios de Ansiedad Caramelizada, desde el sótano hasta el primer ensayo.",
    date: "2024-01-15",
  },
  {
    slug: "post-2",
    title: "Detrás de 'Ecos del Vacío': El Proceso Creativo",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+2",
    imageAlt: "Proceso de grabación del EP",
    description: "Exploramos la inspiración y los desafíos detrás de la creación de nuestro EP debut.",
    date: "2024-02-20",
  },
  {
    slug: "post-3",
    title: "La Gira 'Sombras Urbanas': Anécdotas y Reflexiones",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+3",
    imageAlt: "Anécdotas de la gira",
    description: "Historias de la carretera, encuentros inesperados y la energía de nuestros primeros conciertos.",
    date: "2024-03-10",
  },
  {
    slug: "post-4",
    title: "El Arte de la Distorsión: Nuestro Sonido Característico",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+4",
    imageAlt: "Equipo de sonido vintage",
    description: "Un análisis profundo de los elementos que definen el sonido único de Ansiedad Caramelizada.",
    date: "2024-04-05",
  },
  {
    slug: "post-5",
    title: "Influencias Ocultas: Lo que Nos Inspira Más Allá del Post-Punk",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+5",
    imageAlt: "Libros y discos inspiradores",
    description: "Descubre las referencias inesperadas que nutren nuestra creatividad musical y lírica.",
    date: "2024-05-01",
  },
  {
    slug: "post-6",
    title: "El Escenario es Nuestro Templo: La Experiencia en Vivo",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+6",
    imageAlt: "Concierto en vivo",
    description: "Cómo transformamos cada concierto en un ritual catártico y una experiencia inolvidable.",
    date: "2024-06-12",
  },
  {
    slug: "post-7",
    title: "Nuevos Horizontes: Explorando Sonidos Futuros",
    imageUrl: "/placeholder.svg?height=225&width=400&text=Blog+Post+7",
    imageAlt: "Estudio de grabación moderno",
    description: "Un vistazo a lo que se viene: nuevas experimentaciones y la evolución de nuestro sonido.",
    date: "2024-07-01",
  },
]

const POSTS_PER_PAGE = 5

export default function HomePage() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const currentEvent = timelineEvents[currentEventIndex]

  const goToNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % timelineEvents.length)
  }

  const goToPrev = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + timelineEvents.length) % timelineEvents.length)
  }

  const [currentStyleIndex, setCurrentStyleIndex] = useState(0)
  const currentStyle = musicalStyleSections[currentStyleIndex]

  const goToStyle = (index: number) => {
    setCurrentStyleIndex(index)
  }

  const goToNextStyle = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % musicalStyleSections.length)
  }

  const goToPrevStyle = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex - 1 + musicalStyleSections.length) % musicalStyleSections.length)
  }

  // Lógica de paginación para el blog
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const goToNextBlogPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const goToPrevBlogPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return (
    <div className="flex flex-col w-full">
      {/* Primera Sección: Hero con imagen de fondo y nombre de la banda */}
      <section className="relative flex items-center justify-center w-full min-h-[calc(100vh-8rem)] bg-retro-black text-retro-white overflow-hidden">
        <Image
          src="https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/portada" // URL de tu imagen de Blob para la portada
          alt="Ansiedad Caramelizada - Banda Post-Punk"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-70" // Ligeramente transparente para que el texto resalte
          priority={true}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay oscuro para mejor contraste */}
        <h1 className="relative z-10 text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-lg break-words">
          Ansiedad Caramelizada
        </h1>
      </section>
      {/* Segunda Sección: Línea de tiempo */}
      <section className="relative w-full flex-1 flex flex-col md:flex-row bg-retro-white text-retro-black overflow-hidden min-h-[calc(100vh-8rem)]">
        {/* Top Left: History in the making - Centrado y con más presencia en PC */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-retro-black hidden sm:block">
          Historia en construcción
        </div>
        {/* Bottom Left: Est. 1985 - Oculto en móvil, visible en sm+ */}
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 text-xs sm:text-sm font-bold hidden sm:block">
          Est. 1985
        </div>

        {/* Columna Izquierda: Años de fondo (visible solo en md y superior) */}
        <div className="relative hidden md:flex md:w-1/3 items-center justify-center overflow-hidden">
          {/* Números de año (texto) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {timelineEvents.map((event, index) => (
              <span
                key={event.year}
                className={`absolute font-extrabold transition-all duration-500 ease-in-out select-none pointer-events-none`}
                style={{
                  opacity: index === currentEventIndex ? 1 : 0.1,
                  fontSize: index === currentEventIndex ? "6rem" : "3rem", // Tamaños de fuente ajustados para escritorio
                  color: index === currentEventIndex ? "#000000" : "#999999",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, calc(-50% + ${(index - currentEventIndex) * 100}%))`,
                }}
              >
                {event.year}
              </span>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Contenido principal de la línea de tiempo (imagen y texto) */}
        <div className="relative flex flex-col flex-1 md:w-2/3 p-4 sm:p-8 md:p-12 lg:p-16 z-10 h-full overflow-y-auto">
          {/* Mobile-only background years (visible solo en pantallas pequeñas) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 md:hidden">
            {timelineEvents.map((event, index) => (
              <span
                key={event.year}
                className={`absolute font-extrabold transition-opacity duration-500 ease-in-out transition-transform duration-500 ease-in-out select-none`}
                style={{
                  opacity: index === currentEventIndex ? 0.05 : 0, // Opacidad 0 para no-actual, 0.05 para actual
                  fontSize: index === currentEventIndex ? "3rem" : "1.5rem", // Tamaños de fuente ajustados para móvil
                  color: index === currentEventIndex ? "#000000" : "#999999",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, calc(-50% + ${(index - currentEventIndex) * 100}%))`,
                }}
              >
                {event.year}
              </span>
            ))}
          </div>
          {/* Contenedor de la imagen del evento (prominente) */}
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] mb-4 flex items-center justify-center">
            {timelineEvents.map((event, index) => (
              <Image
                key={event.year} // Mantener key para que React sepa que es un elemento diferente
                src={event.imageUrl || "/placeholder.svg"}
                alt={event.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  border: "2px solid black",
                  boxShadow: "4px 4px 0px 0px #000000",
                }}
                className={`absolute z-10 transition-opacity duration-500 ease-in-out ${
                  index === currentEventIndex ? "opacity-100" : "opacity-0"
                }`} // Control de opacidad para fundido
                priority={index === currentEventIndex} // Priorizar solo la imagen actual
              />
            ))}
          </div>
          {/* Contenido de texto */}
          <div className="w-full flex flex-col justify-center text-center md:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4">{currentEvent.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-retro-black">{currentEvent.description}</p>
          </div>
        </div>
        {/* Navigation Arrows - Posicionado fuera de la columna de contenido */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-30">
          <button onClick={goToPrev} className="retro-button p-1 sm:p-2">
            <ChevronUp className="w-4 h-4 sm:w-6 h-6" />
          </button>
          <button onClick={goToNext} className="retro-button p-1 sm:p-2">
            <ChevronDown className="w-4 h-4 sm:w-6 h-6" />
          </button>
        </div>
      </section>
      {/* Tercera Sección: Miembros */}
      <MembersPage />
      {/* Cuarta Sección: Estilo Musical */}
      <section className="relative flex flex-col w-full min-h-[calc(100vh-8rem)] bg-retro-dark-bg text-retro-light-text overflow-hidden">
        <div className="flex-1 flex flex-col md:flex-row-reverse items-center justify-center p-8 md:p-16 lg:p-24 relative h-full">
          {/* Text Content (Right Column on Desktop, Top on Mobile) */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pl-8 lg:pl-16 mb-8 md:mb-0 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight font-serif">
              {/* Añadido font-serif para un estilo diferenciador */}
              {currentStyle.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-prose overflow-y-auto max-h-[40vh]">
              {currentStyle.description}
            </p>
            {currentStyle.social && (
              <div className="flex space-x-4">
                <Link
                  href={currentStyle.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-light-text hover:text-retro-gray-light"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href={currentStyle.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-light-text hover:text-retro-gray-light"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href={currentStyle.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-light-text hover:text-retro-gray-light"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            )}
          </div>

          {/* Image Content (Left Column on Desktop, Bottom on Mobile) */}
          <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/4] flex items-center justify-center overflow-hidden">
            {musicalStyleSections.map((style, index) => (
              <Image
                key={style.title}
                src={style.imageUrl || "/placeholder.svg"}
                alt={style.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "left", // Asegura que la imagen se vea bien en el lado izquierdo
                  mixBlendMode: "screen", // Efecto diferenciador
                }}
                className={`absolute transition-opacity duration-300 ease-in-out ${
                  index === currentStyleIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === currentStyleIndex}
              />
            ))}
            {/* Navigation Arrows for Mobile and Desktop - MOVIDOS AQUÍ */}
            <button
              onClick={goToPrevStyle}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 retro-button p-2 dark-theme pointer-events-auto"
              aria-label="Previous style section"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNextStyle}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 retro-button p-2 dark-theme pointer-events-auto"
              aria-label="Next style section"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 py-4 bg-retro-dark-bg">
          {musicalStyleSections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStyle(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentStyleIndex ? "bg-retro-light-text" : "bg-retro-accent-dot"
              }`}
              aria-label={`Go to style section ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quinta Sección: Blog */}
      <section id="blog-section" className="w-full bg-retro-white text-retro-black p-8 md:p-16 lg:p-24">
        <div className="grid gap-8">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold">Nuestro Blog</h1>
            <p className="text-base sm:text-lg text-retro-gray-dark">
              Historias, reflexiones y novedades de Ansiedad Caramelizada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentPosts.map((post) => (
              <ProjectCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                imageUrl={post.imageUrl}
                imageAlt={post.imageAlt}
                description={post.description}
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
      </section>
    </div>
  )
}
