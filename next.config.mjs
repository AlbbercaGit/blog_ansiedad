/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Asegúrate de que 'unoptimized: true' no esté aquí o sea 'false'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ycjspxiu10ouz3ju.public.blob.vercel-storage.com", // ¡Este es tu hostname de Blob Store!
        port: "",
        pathname: "/**", // Permite cualquier ruta dentro de tu Blob store
      },
    ],
  },
}

export default nextConfig
