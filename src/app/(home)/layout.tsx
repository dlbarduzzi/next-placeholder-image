import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grid flex-1">{children}</main>
      <Footer />
    </div>
  )
}
