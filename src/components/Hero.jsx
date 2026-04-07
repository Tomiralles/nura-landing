import { ArrowRight, Zap, TrendingUp, Bot } from 'lucide-react'

export default function Hero({ onOpenModal }) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-medium mb-8">
          <Zap size={12} />
          Consultoría IA · Marketing Digital · Automatizaciones
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
          Tu negocio no pierde<br />
          <span className="text-gradient-amber">clientes.</span>{' '}
          Pierde <span className="text-gradient-cyan">velocidad.</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos tu presencia digital con IA, automatizaciones inteligentes y estrategias de marketing que convierten prospectos en ventas confirmadas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onOpenModal}
            className="group flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/25"
          >
            Agendar diagnóstico gratuito
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#sistema" className="px-7 py-3.5 border border-white/15 text-white/70 rounded-full hover:border-white/30 hover:text-white transition-all duration-200 text-sm">
            Ver el sistema
          </a>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { icon: <Bot size={18} />, value: '24/7', label: 'Agente IA activo' },
            { icon: <TrendingUp size={18} />, value: '80%', label: 'Conversión de leads' },
            { icon: <Zap size={18} />, value: '<2min', label: 'Tiempo de respuesta' },
          ].map((m, i) => (
            <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-4 flex flex-col items-center gap-1">
              <div className="text-amber-400 mb-1">{m.icon}</div>
              <div className="text-xl font-bold font-serif text-white">{m.value}</div>
              <div className="text-xs text-white/40 text-center">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  )
}
