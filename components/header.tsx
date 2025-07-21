"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b-2 border-retro-black bg-retro-dark-bg px-6 py-3 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 border-2 border-retro-black bg-retro-white flex items-center justify-center text-base font-bold text-retro-black shadow-[2px_2px_0px_0px_#000000]">
          A
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap gap-4">
          <Link
            href="/"
            className="text-base font-bold text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Inicio
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          <Link
            href="/members"
            className="text-base font-bold text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Miembros
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          <Link
            href="/projects"
            className="text-base font-bold text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Proyectos
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-base font-bold hover:underline text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Aprende
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-base font-bold hover:underline text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Clonarme
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          <Link
            href="#"
            className="text-base font-bold hover:underline text-retro-light-text relative group hover:underline-offset-4 hover:underline transition-all duration-200"
          >
            Encuéntrame
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-retro-light-text scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-retro-light-text p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay with Animation */}
      <div
        className={`fixed inset-0 bg-retro-dark-bg z-40 flex flex-col items-center justify-center md:hidden
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <button
          className="absolute top-4 right-4 text-retro-light-text p-2"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="flex flex-col gap-6 text-center">
          <Link
            href="/"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/members"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Miembros
          </Link>
          <Link
            href="/projects"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Aprende
          </Link>
          <Link
            href="#"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Clonarme
          </Link>
          <Link
            href="#"
            className="text-2xl font-bold text-retro-light-text hover:underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Encuéntrame
          </Link>
        </nav>
      </div>
    </header>
  )
}
