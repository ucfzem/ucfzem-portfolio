import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brown-darker border-t border-gold/10 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10">
        <div className="text-center md:text-left">
          <Link href="/" className="text-gold font-playfair text-lg sm:text-xl lg:text-2xl font-bold tracking-wider rounded px-2 py-1">ucfzem</Link>
          <p className="text-cream/50 text-xs sm:text-sm lg:text-base mt-1">Développeur créatif & Designer graphique</p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center">
          {['LinkedIn', 'GitHub', 'Dribbble', 'Behance'].map(social => (
            <a key={social} href="#" className="text-cream/50 hover:text-gold focus-visible:text-gold transition-colors text-sm lg:text-base rounded px-3 py-2 min-h-[44px] flex items-center">{social}</a>
          ))}
        </div>
        <div className="text-cream/40 text-xs sm:text-xs lg:text-sm text-center">
          <p>© {year} ucfzem. Tous droits réservés.</p>
          <p className="mt-1">Construit avec Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
