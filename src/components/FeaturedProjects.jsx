'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Nass El Ghiwane — Paroles & Citations',
    category: 'Dev · UI · RTL',
    desc: 'Site full-screen dédié aux paroles du groupe mythique Nass El Ghiwane. Extraction de 129 pages PDF en 69 sections avec snap-scroll, RTL arabe.',
    tags: ['HTML/CSS', 'PDF Parsing', 'RTL', 'Scroll Snap'],
    href: 'https://ucfzem.github.io/NassElGhiwane/',
    img: 'https://placehold.co/600x400/1a1410/c89b3c?text=Nass+El+Ghiwane&font=playfair-display',
  },
  {
    title: 'Élixir — Site e-commerce de luxe',
    category: 'Dev · UI',
    desc: 'Conception d’une expérience immersive avec Next.js, Framer Motion, et une charte dorée.',
    tags: ['Next.js', 'Framer Motion', 'UI Design'],
    href: '#',
    img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Élixir&font=playfair-display',
  },
  {
    title: 'Outil de génération de palettes',
    category: 'Dev · UI',
    desc: 'Application React générant des palettes harmonieuses à partir d’une image.',
    tags: ['React', 'Canvas API', 'UI'],
    href: '#',
    img: 'https://placehold.co/600x400/2c2218/c89b3c?text=Palettes&font=playfair-display',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-gradient">Sélection</span> de travaux
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group card-hover"
            >
              <a href={project.href} className="block h-full focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-xl" target={project.href !== '#' ? '_blank' : undefined} rel={project.href !== '#' ? 'noopener noreferrer' : undefined}>
                <div className="bg-brown-deep gold-border rounded-xl p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  <div className="h-32 sm:h-40 lg:h-48 rounded-lg mb-4 sm:mb-5 overflow-hidden gold-border bg-brown-dark/50">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-gold/60 text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase mb-2">{project.category}</span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-playfair font-bold text-cream mb-2 group-hover:text-gold-light transition-colors">{project.title}</h3>
                  <p className="text-cream/50 text-sm sm:text-sm lg:text-base leading-relaxed flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs sm:text-xs lg:text-sm text-cream/40 font-mono px-2 sm:px-2 lg:px-3 py-1 bg-brown-dark/30 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <Link
            href="/portfolio"
            className="btn-outline inline-flex items-center justify-center"
          >
            Voir tous les projets →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
