import { registerUser } from "./actions"
import { RetroWindow } from "@/components/retro-window"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface RegisterPageProps {
  searchParams: Promise<{ error?: string; success?: string }>
}

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams
  const errorMessage = params.error
  const successMessage = params.success

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] p-4 bg-retro-dark-bg text-retro-light-text">
      <RetroWindow title="Registrar Usuario" className="max-w-md w-full">
        <form action={registerUser} className="flex flex-col gap-4 p-4">
          <h2 className="text-xl font-bold text-retro-black">Crear Cuenta</h2>
          
          {errorMessage && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {decodeURIComponent(errorMessage)}
            </div>
          )}
          
          {successMessage && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Usuario creado exitosamente
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-retro-black mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="border-2 border-retro-black bg-retro-white text-retro-black"
              placeholder="albberca@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-retro-black mb-1">
              Contraseña
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="border-2 border-retro-black bg-retro-white text-retro-black"
              placeholder="Alex2010"
            />
          </div>
          <Button type="submit" className="retro-button">
            Registrar
          </Button>
          <p className="text-sm text-retro-black text-center">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="underline">
              Inicia sesión aquí
            </a>
          </p>
        </form>
      </RetroWindow>
    </div>
  )
}
