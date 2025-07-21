"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from "lucide-react"

const members = [
  {
    name: "Alberca",
    description:
      "Alberca es el alma melancólica detrás de las letras y la voz principal de Ansiedad Caramelizada. Sus palabras, cargadas de introspección y crítica social, son el reflejo de una generación que busca sentido en el caos. Su presencia en el escenario es un torbellino de emoción cruda, conectando con cada alma perdida en la multitud.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/alberca", // Placeholder para Alberca
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Nito",
    description:
      "Nito es el arquitecto sonoro, el maestro de los sintetizadores y las texturas atmosféricas que definen el sonido de Ansiedad Caramelizada. Con sus máquinas analógicas, crea paisajes sonoros fríos y envolventes que transportan al oyente a un universo de sombras y luces tenues. Su precisión y experimentación son el corazón electrónico de la banda.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/nito", // Placeholder para Nito
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Lonso",
    description:
      "Lonso es la fuerza rítmica implacable, el baterista que marca el pulso de la ansiedad. Su estilo de percusión, una mezcla de ritmos mecánicos y explosiones orgánicas, es el ancla que mantiene a la banda en tierra mientras exploran los abismos sonoros. Cada golpe es una declaración, cada ritmo una pulsación de la desesperación colectiva.",
    imageUrl: "https://ycjspxiu10ouz3ju.public.blob.vercel-storage.com/lonso", // Placeholder para Lonso
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

export default function MembersPage() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0)
  const currentMember = members[currentMemberIndex]

  const goToMember = (index: number) => {
    setCurrentMemberIndex(index)
  }

  const goToNextMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % members.length)
  }

  const goToPrevMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length)
  }

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-8rem)] bg-retro-dark-bg text-retro-light-text overflow-hidden">
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 relative h-full">
        {/* Text Content (Left Column on Desktop, Top on Mobile) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pr-8 lg:pr-16 mb-8 md:mb-0 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            {currentMember.name}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-prose overflow-y-auto max-h-[40vh]">
            {currentMember.description}
          </p>
          <Link href="#" className="flex items-center text-retro-light-text hover:underline text-lg font-bold mb-6">
            READ MORE <span className="ml-2">→</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              href={currentMember.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-light-text hover:text-retro-gray-light"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href={currentMember.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-light-text hover:text-retro-gray-light"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href={currentMember.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-light-text hover:text-retro-gray-light"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Image Content (Right Column on Desktop, Bottom on Mobile) */}
        <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/4] flex items-center justify-center overflow-hidden">
          {members.map((member, index) => (
            <Image
              key={member.name}
              src={member.imageUrl || "/placeholder.svg"}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                maskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 100%)",
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
              className={`absolute transition-opacity duration-300 ease-in-out ${
                /* Reducida la duración de la transición */
                index === currentMemberIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === currentMemberIndex}
            />
          ))}
          {/* Navigation Arrows for Mobile and Desktop */}
          <button
            onClick={goToPrevMember}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 retro-button p-2 dark-theme pointer-events-auto"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNextMember}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 retro-button p-2 dark-theme pointer-events-auto"
            aria-label="Next member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 py-4 bg-retro-dark-bg">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => goToMember(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentMemberIndex ? "bg-retro-light-text" : "bg-retro-accent-dot"
            }`}
            aria-label={`Go to member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
