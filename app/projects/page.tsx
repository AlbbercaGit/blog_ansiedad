import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="grid gap-8 text-retro-black">
      <div className="grid gap-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Proyectos</h1> {/* Ajuste de tamaño de fuente */}
        <p className="text-base sm:text-lg text-retro-gray-dark">Beep boop bop. Nuestros sonidos más oscuros.</p>{" "}
        {/* Ajuste de tamaño de fuente */}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {" "}
        {/* Reducido el gap para móviles */}
        <ProjectCard
          title="Maqueta Demo '86"
          slug="maqueta-demo-86"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="Maqueta Demo '86"
          description="Nuestras primeras grabaciones crudas y llenas de reverb, capturando la esencia de la desesperación juvenil."
        />
        <ProjectCard
          title="Concierto en El Sótano"
          slug="concierto-el-sotano"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="Concierto en El Sótano"
          description="La noche que el feedback se apoderó de todo. Un caos controlado que definió nuestro sonido en vivo."
        />
        <ProjectCard
          title="EP 'Ecos del Vacío'"
          slug="ecos-del-vacio"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="EP 'Ecos del Vacío'"
          description="Nuestro primer EP, donde exploramos las profundidades del existencialismo con sintetizadores fríos y guitarras afiladas."
        />
        <ProjectCard
          title="Sesiones de Ensayo: Ruido Crudo"
          slug="sesiones-ensayo"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="Sesiones de Ensayo"
          description="Grabaciones espontáneas de nuestras sesiones de ensayo, donde la improvisación y el caos reinaban."
        />
        <ProjectCard
          title="Videoclip 'Ciudad Fantasma'"
          slug="ciudad-fantasma"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="Videoclip 'Ciudad Fantasma'"
          description="Nuestro primer intento de llevar nuestra visión a la pantalla, con estética lo-fi y mucha niebla."
        />
        <ProjectCard
          title="Colaboración con 'Los Despojos'"
          slug="colaboracion-despojos"
          imageUrl="/placeholder.svg?height=225&width=400"
          imageAlt="Colaboración con 'Los Despojos'"
          description="Un encuentro explosivo con otra banda local, fusionando nuestros sonidos en una noche inolvidable-."
        />
      </div>
    </div>
  )
}
