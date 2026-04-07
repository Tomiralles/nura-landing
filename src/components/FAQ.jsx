import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en verse resultados?',
    a: 'La mayoría de nuestros clientes comienzan a ver mejoras en métricas clave (tiempo de respuesta, volumen de leads) en las primeras 2-3 semanas. Los resultados comerciales más sólidos se consolidan entre el mes 1 y 3.',
  },
  {
    q: '¿Necesito conocimientos técnicos para usar el sistema?',
    a: 'No. Nos encargamos de toda la implementación técnica. Tú recibes un dashboard sencillo y un equipo de soporte disponible para responder cualquier duda.',
  },
  {
    q: '¿Trabajan con cualquier tipo de negocio?',
    a: 'Trabajamos principalmente con negocios B2B y B2C que ya tienen tracción y quieren escalar: consultoras, clínicas, inmobiliarias, e-commerce, coaches y agencias.',
  },
  {
    q: '¿El agente IA puede integrarse con mi WhatsApp y CRM?',
    a: 'Sí. Integramos con WhatsApp Business API, y nos conectamos con los principales CRMs del mercado: HubSpot, Salesforce, Pipedrive, Notion y más.',
  },
  {
    q: '¿Qué pasa si quiero cancelar el servicio?',
    a: 'Trabajamos sin contratos de largo plazo. Puedes pausar o cancelar con 30 días de aviso. Todo lo que construimos en tu negocio queda en tu propiedad.',
  },
  {
    q: '¿El diagnóstico inicial tiene costo?',
    a: 'No. El diagnóstico es completamente gratuito y sin compromiso. En esa sesión identificamos tus cuellos de botella y te presentamos un plan de acción personalizado.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 text-center">FAQ</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Preguntas frecuentes</h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${open === i ? 'border-amber-400/30 bg-amber-400/3' : 'border-white/8 bg-white/2'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-sm pr-4">{f.q}</span>
                <span className="flex-shrink-0 text-amber-400">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
