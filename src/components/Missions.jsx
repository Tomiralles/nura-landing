import { useState } from 'react'
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'

const checklistItems = [
  'Tardas más de 1 hora en responder a un prospecto',
  'No tienes un sistema automatizado de seguimiento',
  'No sabes cuántos leads convierte tu marketing',
  'Tu equipo pierde tiempo en tareas repetitivas',
  'No tienes presencia digital optimizada para conversión',
  'Dependes 100% de referencias o recomendaciones',
]

export default function Missions({ onOpenModal }) {
  const [checked, setChecked] = useState({})

  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }))
  const count = Object.values(checked).filter(Boolean).length

  return (
    <section id="metodo" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/2 to-transparent" />
      <div className="relative max-w-5xl mx-auto">

        {/* Insight */}
        <div className="bg-gradient-to-br from-amber-400/10 to-amber-400/3 border border-amber-400/20 rounded-3xl p-8 md:p-12 mb-12 text-center">
          <div className="text-5xl md:text-6xl font-serif font-bold text-gradient-amber mb-4">80%</div>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            de los compradores decide con <strong className="text-white">quién trabajar en los primeros minutos</strong> de contacto. Si no estás ahí, tu competencia lo está.
          </p>
        </div>

        {/* Checklist */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Diagnóstico</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              ¿Cuántas de estas situaciones reconoces?
            </h2>
            <p className="text-white/40 text-sm mb-8">Marca las que aplican a tu negocio ahora mismo.</p>

            <div className="space-y-3">
              {checklistItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                    checked[i]
                      ? 'border-amber-400/40 bg-amber-400/8 text-white'
                      : 'border-white/8 bg-white/2 text-white/50 hover:border-white/20'
                  }`}
                >
                  {checked[i]
                    ? <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0" />
                    : <Circle size={18} className="flex-shrink-0" />}
                  <span className="text-sm">{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Result panel */}
          <div className="sticky top-24">
            <div className="bg-white/3 border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-5xl font-serif font-bold text-gradient-amber mb-2">{count}/6</div>
              <p className="text-white/50 text-sm mb-6">situaciones identificadas</p>

              {count === 0 && (
                <p className="text-white/40 text-sm">Marca las casillas que aplican a tu negocio.</p>
              )}
              {count >= 1 && count <= 2 && (
                <p className="text-white/70 text-sm">Buen punto de partida. Hay áreas de mejora que podemos optimizar.</p>
              )}
              {count >= 3 && count <= 4 && (
                <p className="text-white/70 text-sm">Hay oportunidades claras de crecimiento. Un sistema IA puede cambiar el juego.</p>
              )}
              {count >= 5 && (
                <p className="text-white/70 text-sm">Tu negocio está dejando dinero sobre la mesa. Es urgente actuar.</p>
              )}

              {count >= 2 && (
                <button
                  onClick={onOpenModal}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition-all"
                >
                  Obtener diagnóstico <ArrowRight size={16} />
                </button>
              )}
            </div>

            <div className="mt-6 bg-white/2 border border-white/8 rounded-2xl p-6 text-center">
              <p className="text-white/60 text-sm italic">"Seguir igual es también una decisión.<br />La más costosa de todas."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
