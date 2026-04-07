import { Sparkles, Target, Layers } from 'lucide-react'

const values = [
  { icon: <Target size={20} />, title: 'Orientados a resultados', desc: 'Cada estrategia está diseñada con un objetivo medible. No trabajamos por actividad, sino por impacto.' },
  { icon: <Sparkles size={20} />, title: 'IA como ventaja competitiva', desc: 'Llevamos la inteligencia artificial al núcleo de cada proceso para darte una ventaja real en el mercado.' },
  { icon: <Layers size={20} />, title: 'Sistemas, no proyectos', desc: 'No entregamos un sitio web y desaparecemos. Construimos sistemas que siguen generando valor con el tiempo.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">Sobre NURA</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              No somos una agencia.<br />
              <span className="text-gradient-amber">Somos tu equipo de crecimiento.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              NURA nació con una convicción: la IA no es el futuro, es el presente. Y las empresas que la integren hoy serán las que lideren mañana.
            </p>
            <p className="text-white/50 leading-relaxed">
              Combinamos estrategia de marketing digital, automatizaciones avanzadas y agentes de inteligencia artificial para crear sistemas de crecimiento predecible para negocios que quieren escalar.
            </p>
          </div>

          <div className="space-y-5">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-amber-400/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm">{v.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
