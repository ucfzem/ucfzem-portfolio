import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ucfzem — Développeur créatif & Designer graphique',
  description: 'Portfolio de ucfzem — Je code des expériences, je dessine des émotions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-brown-darker text-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
