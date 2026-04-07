const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'CEO · E-commerce de moda',
    text: 'En 3 semanas con NURA pasamos de responder leads en 6 horas a hacerlo en 90 segundos. Nuestros cierres subieron un 40%.',
    metric: '+40% cierres',
  },
  {
    name: 'Laura Sánchez',
    role: 'Fundadora · Clínica dental',
    text: 'El agente IA maneja más del 70% de las consultas sin intervención humana. Mi equipo ahora se enfoca en atención al paciente.',
    metric: '70% automatizado',
  },
  {
    name: 'Andrés Torres',
    role: 'Director · Agencia inmobiliaria',
    text: 'El sistema de captación nos trajo 3x más leads calificados al mismo costo publicitario. NURA transformó nuestro marketing.',
    metric: '3x leads calificados',
  },
]

const stats = [
  { value: '150+', label: 'Negocios transformados' },
  { value: '3.2M', label: 'Leads gestionados' },
  { value: '62%', label: 'Reducción de CAC promedio' },
  { value: '4.8★', label: 'Satisfacción de clientes' },
]

export default function Results({ onOpenModal }) {
  return (
    <section id="resultados" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/2 to-transparent" />
      <div className="relative max-w-6xl mx-auto">
        <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 text-center">Resultados</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
          Números que hablan por sí solos
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-white/3 border border-white/8 rounded-2xl p-6">
              <div className="font-serif text-3xl font-bold text-gradient-cyan mb-1">{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.role}</div>
                </div>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{t.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para ser el siguiente<br />
            <span className="text-gradient-amber">caso de éxito</span>?
          </h3>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Agenda una sesión de diagnóstico gratuita y descubre exactamente cómo NURA puede escalar tu negocio.
          </p>
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/25 transition-all duration-200"
          >
            Agendar diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  )
}
