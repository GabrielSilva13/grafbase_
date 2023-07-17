import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Flexibble',
  description: 'Mostre e descubra projetos incríveis de vários desenvolvedores',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
