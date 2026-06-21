'use client'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2024', title: 'Fondateur — Freelance', desc: 'Création de mon studio de design & développement.' },
  { year: '2022', title: 'Lead Developer — Agence X', desc: 'Direction technique et architecture front-end.' },
  { year: '2020', title: 'Designer UI/UX — Studio Y', desc: 'Conception d’interfaces et expériences utilisateur.' },
  { year: '2018', title: 'Diplôme Design & Développement', desc: 'Formation en design graphique et développement web.' },
]

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Suite', 'Framer Motion', 'Git', 'Storybook', 'Node.js']

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6"
        >
          <span className="text-gradient">Développeur & Designer</span><br />les deux faces d&apos;une même passion
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-center text-cream/60 text-lg mb-16 leading-relaxed"
        >
          <p>Je m&apos;appelle ucfzem et depuis 6 ans, je navigue entre le code et la création visuelle. Mon parcours a débuté par un amour du dessin et de la typographie, avant de plonger dans les algorithmes et les interfaces. Aujourd&apos;hui, je conçois des produits numériques complets, de la stratégie de marque au pixel parfait, jusqu&apos;à l&apos;architecture React.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-brown-deep gold-border rounded-xl p-8"
          >
            <h3 className="text-xl font-playfair font-bold text-gold mb-4">Côté développement</h3>
            <p className="text-cream/60 leading-relaxed">Spécialisé React/Next.js et TypeScript, je construis des applications performantes, accessibles et évolutives. J&apos;accorde une attention obsessionnelle aux détails d&apos;animation et à la propreté du code.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-brown-deep gold-border rounded-xl p-8"
          >
            <h3 className="text-xl font-playfair font-bold text-gold mb-4">Côté design</h3>
            <p className="text-cream/60 leading-relaxed">Identité de marque, systèmes typographiques, direction artistique pour le print et le digital. Je crée des univers graphiques qui racontent une histoire et résistent au temps.</p>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-playfair font-bold text-center mb-12"
        >
          Mon <span className="text-gradient">parcours</span>
        </motion.h2>

        <div className="relative mb-20">
          <div className="absolute right-1/2 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {timeline.map((entry, i) => (
              <motion.div key={i} variants={item} className={`flex flex-col md:flex-row items-center gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="bg-brown-deep gold-border rounded-xl p-6 md:max-w-md">
                    <span className="text-gold font-mono text-sm">{entry.year}</span>
                    <h3 className="text-lg font-playfair font-bold text-cream mt-1">{entry.title}</h3>
                    <p className="text-cream/50 text-sm mt-2">{entry.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-gold border-2 border-brown-darker z-10" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-playfair font-bold text-center mb-8"
        >
          Stack & <span className="text-gradient">outils</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 text-sm font-mono text-cream/60 gold-border rounded-full hover:border-gold/40 hover:text-gold-light transition-all duration-300">
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border-t border-gold/10 pt-12"
        >
          <p className="text-xl md:text-2xl font-playfair italic text-cream/70 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Le code sans design est fonctionnel, le design sans code est fictionnel. L&apos;union des deux crée l&apos;excellence.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </div>
  )
}
