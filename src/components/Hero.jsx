'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const titleWords = [
  { text: 'Je', className: '' },
  { text: 'code', className: 'text-gradient' },
  { text: 'des', className: '' },
  { text: 'expériences,', className: '' },
]
const subtitleWords = [
  { text: 'je', className: '' },
  { text: 'dessine', className: 'text-gradient' },
  { text: 'des', className: '' },
  { text: 'émotions.', className: '' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const wordAnim = { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-brown-darker pointer-events-none" />
      <div className="text-center z-10 max-w-4xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-7xl font-playfair leading-tight"
        >
          <div className="flex flex-wrap justify-center gap-x-3">
            {titleWords.map((w, i) => (
              <motion.span key={i} variants={wordAnim} className={w.className}>{w.text}</motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-3">
            {subtitleWords.map((w, i) => (
              <motion.span key={i} variants={wordAnim} className={w.className}>{w.text}</motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-cream/60 max-w-2xl mx-auto text-base md:text-lg font-inter leading-relaxed"
        >
          Développeur créatif & designer graphique — je façonne des identités numériques où la technologie sublime l&apos;esthétique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-gold text-brown-darker font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 gold-border rounded-full font-medium text-cream/80 hover:border-gold/50 hover:text-cream transition-all duration-300"
          >
            Parlons de votre projet
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-cream/30 text-xs font-mono"
        >
          <span className="w-8 h-px bg-gold/20" />
          <span>console.log(&apos;Hello, creativity&apos;)</span>
          <span className="w-8 h-px bg-gold/20" />
        </motion.div>
      </div>
    </section>
  )
}
