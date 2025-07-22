import { auth } from "./auth" // Importa tu configuración de NextAuth
import type { NextRequest } from "next/server"

export default auth((req: NextRequest & { auth?: any }) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isProtectedRoute = nextUrl.pathname.startsWith("/admin")

  if (isProtectedRoute && !isLoggedIn) {
    // Redirige a la página de login si no está autenticado
    return Response.redirect(new URL("/login", nextUrl))
  }

  // Si está autenticado y es una ruta protegida, permite el acceso
  // Si no es una ruta protegida, permite el acceso
  return null
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login).*)"],
}
