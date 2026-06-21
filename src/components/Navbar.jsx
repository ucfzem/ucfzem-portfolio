'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'À propos', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleClick = (e, href) => {
    setMenuOpen(false)
    if (isHome && href === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brown-darker/90 backdrop-blur-md shadow-lg shadow-brown-darker/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-gold font-playfair text-xl font-bold tracking-wider hover:text-gold-light transition-colors">
          ucfzem
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href ? 'text-gold' : 'text-cream/70 hover:text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-cream text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-brown-deep/95 backdrop-blur-md border-t border-gold/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-gold' : 'text-cream/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
