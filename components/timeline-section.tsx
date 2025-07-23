"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

interface TimelineEvent {
  year: number
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

interface TimelineSectionProps {
  timelineEvents: TimelineEvent[]
}

export function TimelineSection({ timelineEvents }: TimelineSectionProps) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const currentEvent = timelineEvents[currentEventIndex]

  const goToNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % timelineEvents.length)
  }

  const goToPrev = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + timelineEvents.length) % timelineEvents.length)
  }

  return (
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
  )
}
