import Link from "next/link"

export function Header() {
  return (
    <header className="border-b-2 border-retro-black bg-retro-dark-bg px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 border-2 border-retro-black bg-retro-white flex items-center justify-center text-xs font-bold text-retro-black">
          A
        </div>
        <nav className="flex flex-wrap gap-x-2 gap-y-1">
          <Link href="/" className="text-sm font-bold hover:underline text-retro-light-text">
            Inicio
          </Link>
          <Link href="/members" className="text-sm font-bold hover:underline text-retro-light-text">
            Miembros
          </Link>
          <Link href="/projects" className="text-sm font-bold hover:underline text-retro-light-text">
            Proyectos
          </Link>
          <Link href="#" className="text-sm font-bold hover:underline text-retro-light-text">
            Aprende
          </Link>
          <Link href="#" className="text-sm font-bold hover:underline text-retro-light-text">
            Clonarme
          </Link>
          <Link href="#" className="text-sm font-bold hover:underline text-retro-light-text">
            Encuéntrame
          </Link>
        </nav>
      </div>
    </header>
  )
}
