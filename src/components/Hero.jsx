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
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-brown-darker pointer-events-none" />
      <div className="text-center z-10 max-w-4xl w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair leading-tight"
        >
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 lg:gap-x-4">
            {titleWords.map((w, i) => (
              <motion.span key={i} variants={wordAnim} className={w.className}>{w.text}</motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 lg:gap-x-4">
            {subtitleWords.map((w, i) => (
              <motion.span key={i} variants={wordAnim} className={w.className}>{w.text}</motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 sm:mt-6 lg:mt-8 text-cream/60 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg xl:text-xl font-inter leading-relaxed px-4"
        >
          Développeur créatif & designer graphique — je façonne des identités numériques où la technologie sublime l&apos;esthétique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center justify-center"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="btn-outline inline-flex items-center justify-center"
          >
            Parlons de votre projet
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 flex items-center justify-center gap-2 text-cream/30 text-xs sm:text-sm font-mono"
        >
          <span className="w-6 sm:w-8 lg:w-12 h-px bg-gold/20" />
          <span>console.log(&apos;Hello, creativity&apos;)</span>
          <span className="w-6 sm:w-8 lg:w-12 h-px bg-gold/20" />
        </motion.div>
      </div>
    </section>
  )
}
