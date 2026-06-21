'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'Élixir — Site e-commerce de luxe', category: 'Dev', desc: 'Conception d’une expérience immersive avec Next.js, Framer Motion, et une charte dorée.', tags: ['Next.js', 'Framer Motion', 'UI'], color: 'from-gold/20 to-transparent' },
  { title: 'Affiche Typographique "Mouvement"', category: 'Design', desc: 'Série d’affiches animées explorant la déconstruction typographique.', tags: ['Typography', 'Motion', 'Print'], color: 'from-gold/20 to-transparent' },
  { title: 'Outil de génération de palettes', category: 'Dev', desc: 'Application React générant des palettes harmonieuses à partir d’une image.', tags: ['React', 'Canvas', 'UI'], color: 'from-gold/20 to-transparent' },
  { title: 'Identité de marque — Artisan&Co', category: 'Branding', desc: 'Création d’une identité visuelle complète pour une marque artisanale de luxe.', tags: ['Branding', 'Typography', 'Packaging'], color: 'from-gold/20 to-transparent' },
  { title: 'Dashboard analytique interactif', category: 'Dev', desc: 'Visualisation de données en temps réel avec React et D3.js.', tags: ['React', 'D3.js', 'Data Viz'], color: 'from-gold/20 to-transparent' },
  { title: 'Campagne print — "Matières Premières"', category: 'Design', desc: 'Direction artistique et production visuelle pour une campagne éditoriale.', tags: ['Print', 'Photography', 'Layout'], color: 'from-gold/20 to-transparent' },
]

const filters = ['Tous', 'Dev', 'Design', 'Branding']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const filtered = activeFilter === 'Tous' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4"
        >
          Portfolio — <span className="text-gradient">L&apos;alliance du code et du design</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-cream/50 text-center mb-12 max-w-xl mx-auto"
        >
          Where code meets design
        </motion.p>

        <div className="flex justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-gold text-brown-darker'
                  : 'gold-border text-cream/60 hover:text-cream hover:border-gold/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="bg-brown-deep gold-border rounded-xl p-6 h-full flex flex-col">
                  <div className={`h-36 rounded-lg mb-5 bg-gradient-to-br ${project.color} flex items-center justify-center gold-border`}>
                    <span className="text-gold/30 text-3xl font-playfair">✦</span>
                  </div>
                  <span className="text-gold/60 text-xs font-mono tracking-wider uppercase mb-2">{project.category}</span>
                  <h3 className="text-lg font-playfair font-bold text-cream mb-2 group-hover:text-gold-light transition-colors">{project.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-cream/40 font-mono px-2 py-1 bg-brown-dark/30 rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gold/10">
                    <a href="#" className="text-xs text-gold/60 hover:text-gold transition-colors">Voir le code →</a>
                    <a href="#" className="text-xs text-gold/60 hover:text-gold transition-colors">Live →</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
