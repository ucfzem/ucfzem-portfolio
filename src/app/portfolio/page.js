'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'Élixir — Site e-commerce de luxe', category: 'Dev', desc: 'Conception d’une expérience immersive avec Next.js, Framer Motion, et une charte dorée.', tags: ['Next.js', 'Framer Motion', 'UI'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Élixir&font=playfair-display' },
  { title: 'Outil de génération de palettes', category: 'Dev', desc: 'Application React générant des palettes harmonieuses à partir d’une image.', tags: ['React', 'Canvas', 'UI'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Palettes&font=playfair-display' },
  { title: 'Affiche Typographique "Mouvement"', category: 'Design', desc: 'Série d’affiches animées explorant la déconstruction typographique.', tags: ['Typography', 'Motion', 'Print'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Mouvement&font=playfair-display' },
  { title: 'Identité de marque — Artisan&Co', category: 'Branding', desc: 'Création d’une identité visuelle complète pour une marque artisanale de luxe.', tags: ['Branding', 'Typography', 'Packaging'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Artisan&font=playfair-display' },
  { title: 'Dashboard analytique interactif', category: 'Dev', desc: 'Visualisation de données en temps réel avec React et D3.js.', tags: ['React', 'D3.js', 'Data Viz'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Dashboard&font=playfair-display' },
  { title: 'Campagne print — "Matières Premières"', category: 'Design', desc: 'Direction artistique et production visuelle pour une campagne éditoriale.', tags: ['Print', 'Photography', 'Layout'], color: 'from-gold/20 to-transparent', href: '#', img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Matières&font=playfair-display' },
]

const filters = ['Tous', 'Dev', 'Design', 'Branding']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const filtered = activeFilter === 'Tous' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-center mb-3 sm:mb-4"
        >
          Portfolio — <span className="text-gradient">L&apos;alliance du code et du design</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-cream/50 text-center mb-8 sm:mb-12 lg:mb-16 max-w-xl mx-auto text-sm sm:text-base lg:text-lg"
        >
          Where code meets design
        </motion.p>

        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 min-h-[44px] ${
                activeFilter === f
                  ? 'bg-gold text-brown-darker'
                  : 'gold-border text-cream/60 hover:text-cream hover:border-gold/40 focus-visible:text-cream focus-visible:border-gold/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group card-hover"
              >
                <a href={project.href} target={project.href !== '#' ? '_blank' : undefined} rel={project.href !== '#' ? 'noopener noreferrer' : undefined} className="block h-full">
                  <div className="bg-brown-deep gold-border rounded-xl p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                    <div className="h-28 sm:h-36 lg:h-44 rounded-lg mb-4 sm:mb-5 overflow-hidden gold-border bg-brown-dark/50">
                      {project.img ? (
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gold/30 text-2xl sm:text-3xl lg:text-4xl font-playfair">✦</span>
                        </div>
                      )}
                    </div>
                  <span className="text-gold/60 text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase mb-2">{project.category}</span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-playfair font-bold text-cream mb-2 group-hover:text-gold-light transition-colors">{project.title}</h3>
                  <p className="text-cream/50 text-xs sm:text-sm lg:text-base leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs sm:text-xs lg:text-sm text-cream/40 font-mono px-2 sm:px-2 lg:px-3 py-1 bg-brown-dark/30 rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4 mt-4 pt-4 border-t border-gold/10">
                    <span className="text-xs sm:text-sm lg:text-base text-gold/60 group-hover:text-gold transition-colors">{project.href !== '#' ? 'Voir le projet →' : 'À venir →'}</span>
                  </div>
                </div>
              </a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
