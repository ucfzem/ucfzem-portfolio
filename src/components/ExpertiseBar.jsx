export default function ExpertiseBar() {
  const skills = ['React', 'Next.js', 'TypeScript', 'UI/UX Design', 'Branding', 'Motion Design', 'Framer Motion', 'Tailwind CSS']
  return (
    <section className="py-12 border-y border-gold/10 bg-brown-deep/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 text-sm font-mono text-cream/60 gold-border rounded-full hover:border-gold/40 hover:text-gold-light transition-all duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
