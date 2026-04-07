import { Clock, UserX, BarChart2 } from 'lucide-react'

const problems = [
  {
    icon: <Clock size={24} />,
    title: 'Respuestas lentas',
    desc: 'Tus prospectos contactan a la competencia mientras tú tardas horas en responder. Cada minuto perdido es una venta perdida.',
  },
  {
    icon: <UserX size={24} />,
    title: 'Leads sin calificar',
    desc: 'Inviertes tiempo y dinero en atraer contactos, pero sin un sistema que los filtre y nutra automáticamente, la mayoría se enfría.',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Sin datos, sin rumbo',
    desc: 'Tomas decisiones de marketing a ciegas. Sin métricas claras no sabes qué funciona, qué falla ni dónde enfocar tu inversión.',
  },
]

export default function Problem({ onOpenModal }) {
  return (
    <section id="problema" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4 text-center">El Problema</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Los problemas que enfrentas<br />cada día
        </h2>
        <p className="text-white/40 text-center max-w-xl mx-auto mb-16">
          Si tienes un negocio y quieres escalar, probablemente reconoces alguno de estos síntomas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-amber-400/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="px-7 py-3.5 bg-white/5 border border-white/15 text-white/80 rounded-full hover:border-amber-400/40 hover:text-white transition-all duration-200 text-sm"
          >
            ¿Te identificas? Hablemos →
          </button>
        </div>
      </div>
    </section>
  )
}
