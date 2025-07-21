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
      "Nito es la fuerza rítmica implacable, el baterista que marca el pulso de la ansiedad. Su estilo de percusión, una mezcla de ritmos mecánicos y explosiones orgánicas, es el ancla que mantiene a la banda en tierra mientras exploran los abismos sonoros. Cada golpe es una declaración, cada ritmo una pulsación de la desesperación colectiva.",
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
      "Lonso es el latido sombrío que habita bajo cada canción, el bajista que traza las líneas invisibles entre el caos y el control. Su bajo no solo acompaña: habla, gruñe, arrastra. Con un sonido denso y arrastrado, sostiene el peso emocional de la banda como una columna vertebral de niebla y cemento. Sus líneas se arrastran como espectros, envolviendo cada tema en una tensión que nunca se resuelve del todo.",
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
    <div className="flex flex-col w-full h-[calc(100vh-8rem)] bg-retro-dark-bg text-retro-light-text overflow-hidden">
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 relative h-full">
        {/* Text Content (Left Column on Desktop, Top on Mobile) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pr-8 lg:pr-16 mb-8 md:mb-0">
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
            <div
              key={member.name}
              className={`absolute inset-0 m-auto w-[80%] h-[80%] transition-opacity duration-500 ease-in-out ${
                index === currentMemberIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={member.imageUrl || "/placeholder.svg"}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  maskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 30%, transparent 100%)",
                  maskSize: "100% 100%", // Revertido a 100% para que la máscara cubra la imagen al 80%
                  WebkitMaskSize: "100% 100%", // Revertido a 100%
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
                priority={index === currentMemberIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevMember}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 retro-button p-2 dark-theme hidden md:block" // Oculto en móvil, visible en md+
          aria-label="Previous member"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextMember}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 retro-button p-2 dark-theme hidden md:block" // Oculto en móvil, visible en md+
          aria-label="Next member"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
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
