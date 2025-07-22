import { RetroWindow } from "@/components/retro-window"

export default function MusicalStylePage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-8rem)] bg-retro-dark-bg text-retro-light-text p-8 md:p-16 lg:p-24 overflow-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-center leading-tight">
        Estilo Musical
      </h1>

      <div className="grid gap-12 max-w-4xl mx-auto">
        {/* Sección de Letras */}
        <RetroWindow title="Letras: Ecos del Alma" className="w-full">
          <div className="grid gap-4">
            <p className="text-base sm:text-lg lg:text-xl text-retro-black">
              Las letras de Ansiedad Caramelizada son un espejo de la melancolía urbana y la introspección existencial.
              Abordamos temas como la alienación, la búsqueda de identidad en un mundo en constante cambio, y la belleza
              encontrada en la desolación. Cada verso es un grito ahogado, una reflexión sobre la fragilidad humana y la
              resistencia del espíritu. Nos inspiramos en la poesía oscura, el cine noir y las calles grises de la
              ciudad.
            </p>
          </div>
        </RetroWindow>

        {/* Sección de Referencias */}
        <RetroWindow title="Referencias: Un Tapiz de Influencias" className="w-full">
          <div className="grid gap-4">
            <p className="text-base sm:text-lg lg:text-xl text-retro-black">
              Nuestra música es un crisol de influencias que van desde el post-punk británico de los 80 (Joy Division,
              The Cure, Siouxsie and the Banshees) hasta el krautrock experimental (Can, Neu!) y la new wave más oscura.
              También bebemos de la literatura de Camus y Kafka, y de la estética visual de películas como Blade Runner
              y Eraserhead. Buscamos crear un sonido que sea a la vez familiar y extrañamente nuevo.
            </p>
          </div>
        </RetroWindow>

        {/* Sección de Sonido */}
        <RetroWindow title="Sonido: La Distorsión de la Melancolía" className="w-full">
          <div className="grid gap-4">
            <p className="text-base sm:text-lg lg:text-xl text-retro-black">
              El sonido de Ansiedad Caramelizada se caracteriza por sus guitarras reverberadas y afiladas, líneas de
              bajo hipnóticas y pulsantes, baterías mecánicas y frías, y sintetizadores atmosféricos que construyen
              paisajes sonoros densos y envolventes. La voz, a menudo distante y cargada de emoción, se funde con la
              instrumentación para crear una experiencia inmersiva. La producción busca una crudeza lo-fi que evoca la
              era analógica.
            </p>
          </div>
        </RetroWindow>

        {/* Sección de Directo */}
        <RetroWindow title="Directo: Catarsis en el Escenario" className="w-full">
          <div className="grid gap-4">
            <p className="text-base sm:text-lg lg:text-xl text-retro-black">
              Nuestros conciertos son más que una simple actuación; son un ritual catártico. La iluminación tenue, el
              humo denso y las proyecciones abstractas crean una atmósfera inmersiva que transporta al público a nuestro
              universo sonoro. La energía en el escenario es cruda y visceral, invitando a la audiencia a perderse en el
              ritmo y la emoción. Cada directo es una oportunidad para conectar y liberar la ansiedad colectiva.
            </p>
          </div>
        </RetroWindow>
      </div>
    </div>
  )
}
