import { Globe, Bot, Funnel, BarChart, Workflow, Mail } from 'lucide-react'

const services = [
  {
    icon: <Globe size={22} />,
    color: 'amber',
    tag: 'Presencia Digital',
    title: 'Landing Pages de Alta Conversión',
    desc: 'Diseñamos páginas web optimizadas para convertir visitantes en leads calificados. Cada elemento está pensado para persuadir y guiar al usuario hacia la acción.',
    items: ['Diseño premium a medida', 'Optimización SEO técnica', 'Integración con CRM', 'A/B Testing continuo'],
  },
  {
    icon: <Bot size={22} />,
    color: 'cyan',
    tag: 'Inteligencia Artificial',
    title: 'Agente IA 24/7',
    desc: 'Tu asistente de ventas nunca duerme. Responde consultas, califica leads y agenda citas automáticamente, sin intervención humana.',
    items: ['Respuestas en <2 minutos', 'Calificación automática de leads', 'Integración WhatsApp y web', 'Aprendizaje continuo'],
  },
  {
    icon: <Funnel size={22} />,
    color: 'amber',
    tag: 'Captación',
    title: 'Sistema de Captación de Leads',
    desc: 'Funnels automatizados que atraen, nutren y convierten prospectos en clientes de forma predecible y escalable.',
    items: ['Meta Ads + Google Ads', 'Email sequences automáticas', 'Lead scoring inteligente', 'Remarketing avanzado'],
  },
  {
    icon: <Workflow size={22} />,
    color: 'cyan',
    tag: 'Automatización',
    title: 'Automatizaciones de Negocio',
    desc: 'Elimina tareas repetitivas y conecta todas tus herramientas. Tu equipo se enfoca en lo que importa: cerrar ventas.',
    items: ['Flujos de trabajo automáticos', 'Integración multi-plataforma', 'Notificaciones inteligentes', 'Reportes automáticos'],
  },
  {
    icon: <BarChart size={22} />,
    color: 'amber',
    tag: 'Analytics',
    title: 'Dashboard de Métricas',
    desc: 'Visibilidad total de tu embudo de ventas. Toma decisiones basadas en datos reales, no en intuición.',
    items: ['KPIs en tiempo real', 'Tracking de conversiones', 'ROI por canal', 'Informes ejecutivos'],
  },
  {
    icon: <Mail size={22} />,
    color: 'cyan',
    tag: 'Marketing Digital',
    title: 'Estrategia de Contenido y Ads',
    desc: 'Creamos y gestionamos campañas de pago y contenido orgánico que posicionan tu marca y atraen al cliente ideal.',
    items: ['Estrategia omnicanal', 'Creación de contenido IA', 'Gestión de redes sociales', 'Campañas de performance'],
  },
]

export default function System({ onOpenModal }) {
  return (
    <section id="sistema" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 text-center">El Sistema</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Todo lo que necesitas<br />en un solo lugar
        </h2>
        <p className="text-white/40 text-center max-w-xl mx-auto mb-16">
          Nuestro sistema integrado combina IA, automatización y marketing digital para llevarte del caos al crecimiento predecible.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const isAmber = s.color === 'amber'
            return (
              <div key={i} className="group bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-all duration-300 flex flex-col">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${isAmber ? 'bg-amber-400/10 text-amber-400 group-hover:bg-amber-400/20' : 'bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20'}`}>
                  {s.icon}
                </div>
                <span className={`text-xs font-semibold tracking-wider uppercase mb-2 ${isAmber ? 'text-amber-400/70' : 'text-cyan-400/70'}`}>{s.tag}</span>
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="mt-auto space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/50">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isAmber ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-full hover:shadow-xl hover:shadow-amber-400/25 transition-all duration-200"
          >
            Quiero implementar el sistema →
          </button>
        </div>
      </div>
    </section>
  )
}
