import { useState, useEffect } from 'react'
import { X, CheckCircle2, Loader2 } from 'lucide-react'

const initialForm = { name: '', email: '', phone: '', business: '', message: '' }

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission
    setTimeout(() => setStatus('success'), 1500)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setForm(initialForm); setStatus('idle') }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0d0d12] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/8">
          <button onClick={handleClose} className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2">Diagnóstico Gratuito</p>
          <h3 className="font-serif text-2xl font-bold">Cuéntanos sobre tu negocio</h3>
          <p className="text-white/40 text-sm mt-1">Te contactaremos en menos de 24 horas.</p>
        </div>

        <div className="px-8 py-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle2 size={48} className="text-amber-400 mx-auto mb-4" />
              <h4 className="font-serif text-xl font-bold mb-2">¡Solicitud recibida!</h4>
              <p className="text-white/50 text-sm max-w-xs mx-auto">
                Revisaremos tu caso y nos pondremos en contacto contigo en las próximas horas.
              </p>
              <button onClick={handleClose} className="mt-6 px-6 py-2.5 bg-amber-400 text-black font-semibold rounded-full text-sm">
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Nombre *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Email *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Teléfono</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Negocio *</label>
                  <input
                    name="business" value={form.business} onChange={handleChange} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1.5">¿Cuál es tu mayor reto ahora mismo?</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  placeholder="Ej: No tengo suficientes leads, mis ventas son inconsistentes..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-all disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                ) : (
                  'Enviar solicitud de diagnóstico'
                )}
              </button>
              <p className="text-center text-white/25 text-xs">Sin compromiso · Respuesta en menos de 24h</p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
