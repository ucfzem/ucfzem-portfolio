'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-4 sm:mb-6 lg:mb-8"
        >
          Travaillons <span className="text-gradient">ensemble</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cream/60 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto px-4"
        >
          Vous avez un projet mêlant technique et direction artistique ? Écrivons la suite.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
