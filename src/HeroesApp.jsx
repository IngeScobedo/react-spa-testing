import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <div className="h-screen">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  )
}
