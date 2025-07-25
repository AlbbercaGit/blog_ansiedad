import { signIn } from "@/auth"
import { RetroWindow } from "@/components/retro-window"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface LoginPageProps {
  searchParams: Promise<{ error?: string; success?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams
  const successMessage = params.success

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] p-4 bg-retro-dark-bg text-retro-light-text">
      <RetroWindow title="Iniciar Sesión" className="max-w-md w-full">
        <form
          action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
          }}
          className="flex flex-col gap-4 p-4"
        >
          <h2 className="text-xl font-bold text-retro-black">Acceso al CMS</h2>
          
          {successMessage === "user-created" && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              ¡Usuario creado exitosamente! Ahora puedes iniciar sesión.
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
              className="border-2 border-retro-black bg-retro-white text-retro-black"
              placeholder="Alex2010"
            />
          </div>
          <Button type="submit" className="retro-button">
            Iniciar Sesión
          </Button>
          <p className="text-sm text-retro-black text-center">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="underline">
              Regístrate aquí
            </a>
          </p>
        </form>
      </RetroWindow>
    </div>
  )
}
