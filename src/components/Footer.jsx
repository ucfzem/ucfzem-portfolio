import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brown-darker border-t border-gold/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-gold font-playfair text-lg font-bold tracking-wider">ucfzem</Link>
          <p className="text-cream/50 text-sm mt-1">Développeur créatif & Designer graphique</p>
        </div>
        <div className="flex items-center gap-6">
          {['LinkedIn', 'GitHub', 'Dribbble', 'Behance'].map(social => (
            <a key={social} href="#" className="text-cream/50 hover:text-gold transition-colors text-sm">{social}</a>
          ))}
        </div>
        <div className="text-cream/40 text-xs text-center">
          <p>© {year} ucfzem. Tous droits réservés.</p>
          <p className="mt-1">Construit avec Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
