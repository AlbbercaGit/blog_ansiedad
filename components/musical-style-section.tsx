"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from "lucide-react"

interface MusicalStyleSectionData {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  social: {
    facebook: string
    twitter: string
    instagram: string
  } | null
}

interface MusicalStyleSectionProps {
  musicalStyleSections: MusicalStyleSectionData[]
}

export function MusicalStyleSection({ musicalStyleSections }: MusicalStyleSectionProps) {
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

  return (
    <section className="relative flex flex-col w-full min-h-[calc(100vh-8rem)] bg-retro-dark-bg text-retro-light-text overflow-hidden">
      <div className="flex-1 flex flex-col md:flex-row-reverse items-center justify-center p-8 md:p-16 lg:p-24 relative h-full">
        {/* Text Content (Right Column on Desktop, Top on Mobile) */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pl-8 lg:pl-16 mb-8 md:mb-0 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight font-serif">
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
          {/* Navigation Arrows for Mobile and Desktop */}
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
  )
}
