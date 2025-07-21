import { RetroWindow } from "@/components/retro-window"
import Image from "next/image"
import Link from "next/link"

// This is a placeholder for dynamic content. In a real app, you'd fetch data based on slug.
const blogPosts: {
  [key: string]: {
    title: string
    date: string
    category: string
    imageUrl: string
    imageAlt: string
    content: string[]
  }
} = {
  "manifiesto-ansiedad-caramelizada": {
    title: "El Manifiesto de Ansiedad Caramelizada",
    date: "1985-03-15",
    category: "Filosofía",
    imageUrl: "/placeholder.svg?height=300&width=800",
    imageAlt: "Ansiedad Caramelizada en el escenario",
    content: [
      "En los oscuros y melancólicos pasillos de 1985, donde el futuro se sentía tan incierto como el eco de una guitarra desafinada, nació Ansiedad Caramelizada. No somos solo una banda; somos un grito, un susurro, una distorsión en el tejido de la realidad.",
      "Nuestra música es el reflejo de las calles grises, de los corazones rotos y de la dulce desesperación que nos consume. No buscamos la fama, sino la catarsis. Cada nota es una lágrima, cada ritmo un latido acelerado, cada letra un poema a la soledad compartida.",
      "Creemos en el poder del ruido como forma de expresión, en la belleza de la disonancia y en la verdad que se esconde en las sombras. Somos la banda sonora de la alienación, el eco de una generación que se niega a ser silenciada.",
      "Únete a nosotros en este viaje a través del vacío, donde la ansiedad se vuelve dulce y el post-punk es la única verdad. Esto es Ansiedad Caramelizada. Esto es nuestro manifiesto.",
    ],
  },
  "primeros-acordes": {
    title: "Primeros Acordes: La Génesis del Sonido",
    date: "1985-04-01",
    category: "Historia",
    imageUrl: "/placeholder.svg?height=300&width=800",
    imageAlt: "Banda practicando en un garaje",
    content: [
      "Todo comenzó en un garaje que olía a humedad, tabaco rancio y sueños rotos. Era el invierno del 84, y el frío se colaba por cada rendija, pero el calor de la frustración nos mantenía en pie.",
      "Yo (voz y letras) había estado escribiendo poemas oscuros en mi cuaderno, mientras que El Silencioso (bajo) ya tenía esas líneas de bajo hipnóticas que te perforaban el alma. La Chispa (guitarra) llegó con su fuzz y su reverb, y El Metrónomo (batería) con una caja de ritmos que sonaba a máquina de escribir poseída.",
      "Al principio, era solo ruido. Un caos hermoso. Pero poco a poco, entre cigarrillos y cafés fríos, las piezas empezaron a encajar. Descubrimos que nuestras ansiedades individuales se fusionaban en una sinfonía colectiva de post-punk. Así nació nuestro sonido, crudo, honesto y sin concesiones.",
    ],
  },
  "estetica-del-frio": {
    title: "La Estética del Frío: Moda Post-Punk",
    date: "1985-04-20",
    category: "Cultura",
    imageUrl: "/placeholder.svg?height=300&width=800",
    imageAlt: "Moda gótica de los 80",
    content: [
      "La moda para nosotros no era una elección, era una extensión de nuestra música y nuestra filosofía. En los 80, mientras el pop brillaba con colores neón, nosotros nos sumergíamos en la paleta de grises y negros, reflejando la melancolía de nuestras almas.",
      "Gabardinas largas, a menudo de segunda mano, que nos daban un aire misterioso y nos protegían del frío existencial. Botas militares, pesadas y ruidosas, marcando cada paso con una declaración de intenciones. Camisas blancas desabrochadas, corbatas finas y desordenadas, y el pelo, siempre el pelo, despeinado y desafiante.",
      "No seguíamos tendencias; las creábamos a partir de nuestra propia desesperación. Cada prenda era una armadura contra la superficialidad, un uniforme para los que sentían demasiado en un mundo que parecía no sentir nada. La estética del frío no era solo ropa; era una forma de vida.",
    ],
  },
  "sintetizadores-sombras": {
    title: "Sintetizadores y Sombras: Nuestro Equipo",
    date: "1985-05-05",
    category: "Música",
    imageUrl: "/placeholder.svg?height=300&width=800",
    imageAlt: "Sintetizador analógico y pedales de efectos",
    content: [
      "En el corazón de nuestro sonido post-punk yacían los sintetizadores y una colección de pedales de efectos que transformaban nuestras guitarras en paisajes sonoros desolados. No éramos puristas del rock; abrazamos la tecnología para pintar nuestras sombras.",
      "Nuestro Korg Poly-61, con sus sonidos fríos y etéreos, creaba atmósferas que te transportaban a un futuro distópico. La caja de ritmos, una Roland TR-606, marcaba el pulso implacable de nuestra ansiedad, a menudo programada para sonar más a máquina que a humano.",
      "Y luego estaban los pedales: el flanger que hacía que la guitarra sonara como un fantasma, el delay que creaba ecos infinitos en el vacío, y el chorus que le daba a todo un brillo inquietante. Cada pieza de equipo era una herramienta para explorar las profundidades de nuestra melancolía, para construir un muro de sonido que nos protegiera del mundo exterior.",
    ],
  },
}

export default function SingleBlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <RetroWindow title="Error 404" className="max-w-md mx-auto">
        {" "}
        {/* Ajuste de max-width para error */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-sm sm:text-base">
          Lo sentimos, el artículo que buscas no existe o ha sido borrado por la censura.
        </p>
        <Link href="/blog" className="retro-button mt-4">
          Volver al blog
        </Link>
      </RetroWindow>
    )
  }

  return (
    <RetroWindow title={`${post.date}-${params.slug}.pdf`} className="max-w-full sm:max-w-4xl mx-auto h-full">
      {" "}
      {/* Ajuste de max-w para la página */}
      <div className="grid gap-4 sm:gap-6 h-full overflow-auto">
        {" "}
        {/* Reducido el gap para móviles */}
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.imageAlt}
          width={800}
          height={300}
          className="aspect-video object-cover border-2 border-retro-black w-full h-auto" // Asegurar que la imagen sea fluida
        />
        <div className="grid gap-1 sm:gap-2">
          {" "}
          {/* Reducido el gap para móviles */}
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{post.title}</h1>{" "}
          {/* Ajuste de tamaño de fuente */}
          <p className="text-xs sm:text-sm text-retro-gray-dark uppercase">{post.category}</p>{" "}
          {/* Ajuste de tamaño de fuente */}
        </div>
        <div className="prose prose-gray max-w-none text-retro-black text-sm sm:text-base">
          {" "}
          {/* Ajuste de tamaño de fuente */}
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-3 sm:mb-4">
              {" "}
              {/* Reducido el mb para móviles */}
              {paragraph}
            </p>
          ))}
        </div>
        <Link href="/blog" className="retro-button w-fit mt-auto">
          Volver al blog
        </Link>
      </div>
    </RetroWindow>
  )
}
