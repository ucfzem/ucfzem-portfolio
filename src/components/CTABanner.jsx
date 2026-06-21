'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-playfair font-bold mb-6"
        >
          Travaillons <span className="text-gradient">ensemble</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cream/60 text-lg mb-10 max-w-xl mx-auto"
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
            className="inline-block px-10 py-4 bg-gold text-brown-darker font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 text-lg"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
