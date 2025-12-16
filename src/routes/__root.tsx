import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/shared/WhatsAppButton'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
      <TanStackRouterDevtools />
    </>
  )
}
