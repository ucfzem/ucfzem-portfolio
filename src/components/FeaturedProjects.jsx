'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Élixir — Site e-commerce de luxe',
    category: 'Dev · UI',
    desc: 'Conception d’une expérience immersive avec Next.js, Framer Motion, et une charte dorée.',
    tags: ['Next.js', 'Framer Motion', 'UI Design'],
    href: '#',
  },
  {
    title: 'Affiche Typographique "Mouvement"',
    category: 'Design · Motion',
    desc: 'Série d’affiches animées explorant la déconstruction typographique.',
    tags: ['Typography', 'Motion', 'Print'],
    href: '#',
  },
  {
    title: 'Outil de génération de palettes',
    category: 'Dev · UI',
    desc: 'Application React générant des palettes harmonieuses à partir d’une image.',
    tags: ['React', 'Canvas API', 'UI'],
    href: '#',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair text-center mb-16"
        >
          <span className="text-gradient">Sélection</span> de travaux
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group card-hover"
            >
              <Link href={project.href} className="block">
                <div className="bg-brown-deep gold-border rounded-xl p-6 h-full flex flex-col">
                  <div className="h-40 bg-brown-dark/50 rounded-lg mb-5 flex items-center justify-center gold-border">
                    <span className="text-gold/30 text-4xl font-playfair">✦</span>
                  </div>
                  <span className="text-gold/60 text-xs font-mono tracking-wider uppercase mb-2">{project.category}</span>
                  <h3 className="text-lg font-playfair font-bold text-cream mb-2 group-hover:text-gold-light transition-colors">{project.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-cream/40 font-mono px-2 py-1 bg-brown-dark/30 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 gold-border rounded-full text-cream/80 hover:border-gold hover:text-gold transition-all duration-300 font-medium"
          >
            Voir tous les projets →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
