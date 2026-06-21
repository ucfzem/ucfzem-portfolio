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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-gold font-playfair text-lg sm:text-xl lg:text-2xl font-bold tracking-wider hover:text-gold-light focus-visible:text-gold-light transition-colors rounded px-2 py-1"
        >
          ucfzem
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm lg:text-base font-medium transition-colors duration-200 rounded px-3 py-2 min-h-[44px] flex items-center ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-cream/70 hover:text-cream focus-visible:text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-cream text-2xl p-3 min-h-[44px] min-w-[44px] rounded focus-visible:outline-2 focus-visible:outline-gold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-brown-deep/95 backdrop-blur-md border-t border-gold/10">
          <div className="flex flex-col px-4 sm:px-6 py-4 gap-2">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-base font-medium transition-colors rounded px-4 py-3 min-h-[44px] flex items-center ${
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
