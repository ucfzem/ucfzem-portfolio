export default function ExpertiseBar() {
  const skills = ['React', 'Next.js', 'TypeScript', 'UI/UX Design', 'Branding', 'Motion Design', 'Framer Motion', 'Tailwind CSS']
  return (
    <section className="py-8 sm:py-12 lg:py-16 border-y border-gold/10 bg-brown-deep/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          {skills.map(skill => (
            <span key={skill} className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-mono text-cream/60 gold-border rounded-full hover:border-gold/40 hover:text-gold-light focus-visible:text-gold-light focus-visible:border-gold/40 transition-all duration-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
