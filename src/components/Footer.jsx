export default function Footer({ onOpenModal }) {
  return (
    <footer className="border-t border-white/8 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Final CTA */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl font-bold mb-4">
            El momento de actuar es <span className="text-gradient-amber">ahora</span>
          </h3>
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20 transition-all"
          >
            Agendar diagnóstico gratuito
          </button>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-xl font-bold text-gradient-amber">NURA</span>
          <p className="text-white/30 text-sm text-center">
            © {new Date().getFullYear()} NURA Consultoría IA · Marketing Digital & Automatizaciones
          </p>
          <div className="flex gap-6">
            {['Privacidad', 'Términos'].map(l => (
              <a key={l} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
