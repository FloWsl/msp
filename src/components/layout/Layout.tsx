import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollProgress } from './ScrollProgress'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
