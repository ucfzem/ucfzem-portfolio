'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4"
        >
          Démarrons une <span className="text-gradient">conversation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-cream/50 text-center mb-12 max-w-lg mx-auto"
        >
          Disponible pour des missions freelance ou un poste en CDI. Remplissez le formulaire ou écrivez-moi directement à <a href="mailto:hello@ucfzem.com" className="text-gold hover:text-gold-light transition-colors">hello@ucfzem.com</a>
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-brown-deep gold-border rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">Nom</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-brown-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-brown-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-brown-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>
          <button
            type="submit"
            className={`w-full py-4 rounded-full font-semibold transition-all duration-300 text-lg ${
              sent
                ? 'bg-green-600 text-white'
                : 'bg-gold text-brown-darker hover:bg-gold-light shadow-lg shadow-gold/20'
            }`}
          >
            {sent ? '✓ Message envoyé !' : 'Envoyer'}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 mt-12"
        >
          {['LinkedIn', 'GitHub', 'Dribbble', 'Behance'].map(social => (
            <a
              key={social}
              href="#"
              className="text-cream/40 hover:text-gold transition-colors text-sm font-medium gold-border px-4 py-2 rounded-full hover:border-gold/40"
            >
              {social}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-cream/30 text-sm mt-12 font-mono"
        >
          &ldquo;Le code sans design est fonctionnel, le design sans code est fictionnel.&rdquo;
        </motion.p>
      </div>
    </div>
  )
}
