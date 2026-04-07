import { useState } from 'react'
import { Users, BarChart2, MessageCircle, Tag, Download, Search, X } from 'lucide-react'

const mockLeads = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos@empresa.com', phone: '+52 55 1234 5678', business: 'E-commerce Moda', message: 'Quiero más ventas online', date: '2024-01-15', status: 'Nuevo' },
  { id: 2, name: 'Laura Sánchez', email: 'laura@clinica.mx', phone: '+52 33 9876 5432', business: 'Clínica Dental', message: 'Necesito automatizar citas', date: '2024-01-16', status: 'Contactado' },
  { id: 3, name: 'Andrés Torres', email: 'andres@inmobiliaria.com', phone: '+52 81 5555 4444', business: 'Inmobiliaria Norte', message: 'Más leads calificados', date: '2024-01-17', status: 'Calificado' },
  { id: 4, name: 'María García', email: 'maria@consultora.io', phone: '+52 55 7777 8888', business: 'Consultora García', message: 'Automatizar seguimiento', date: '2024-01-18', status: 'Nuevo' },
]

const statusColors = {
  'Nuevo': 'bg-blue-400/15 text-blue-400',
  'Contactado': 'bg-amber-400/15 text-amber-400',
  'Calificado': 'bg-green-400/15 text-green-400',
}

const tabs = [
  { id: 'leads', label: 'Leads', icon: <Users size={16} /> },
  { id: 'tracking', label: 'Meta Tracking', icon: <BarChart2 size={16} /> },
  { id: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle size={16} /> },
  { id: 'gtm', label: 'Google Tag Manager', icon: <Tag size={16} /> },
]

export default function AdminPanel({ open, onClose }) {
  const [activeTab, setActiveTab] = useState('leads')
  const [search, setSearch] = useState('')

  if (!open) return null

  const filtered = mockLeads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.email.toLowerCase().includes(search.toLowerCase()) ||
    l.business.toLowerCase().includes(search.toLowerCase())
  )

  const handleExport = () => {
    const csv = ['Nombre,Email,Teléfono,Negocio,Mensaje,Fecha,Estado',
      ...filtered.map(l => `${l.name},${l.email},${l.phone},${l.business},"${l.message}",${l.date},${l.status}`)
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'nura-leads.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-[#0d0d12] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="px-8 py-5 border-b border-white/8 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="font-serif text-xl font-bold">Panel de Administración</h3>
            <p className="text-white/35 text-xs mt-0.5">NURA · Gestión de leads y tracking</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-8 pt-4 border-b border-white/8 flex gap-1 flex-shrink-0 overflow-x-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === t.id
                  ? 'bg-amber-400/10 text-amber-400 border-b-2 border-amber-400'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'leads' && (
            <div>
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="relative flex-1 min-w-0 max-w-sm">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    value={search} onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar leads..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-amber-400/50"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/35 text-xs">{filtered.length} leads</span>
                  <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/70 hover:text-white hover:border-white/20 transition-all">
                    <Download size={14} /> Exportar CSV
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8">
                      {['Nombre', 'Email', 'Negocio', 'Fecha', 'Estado'].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-white/35 text-xs font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(l => (
                      <tr key={l.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="py-4 px-3">
                          <div className="font-medium text-white text-sm">{l.name}</div>
                          <div className="text-white/35 text-xs">{l.phone}</div>
                        </td>
                        <td className="py-4 px-3 text-white/55 text-xs">{l.email}</td>
                        <td className="py-4 px-3 text-white/55 text-xs">{l.business}</td>
                        <td className="py-4 px-3 text-white/35 text-xs">{l.date}</td>
                        <td className="py-4 px-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[l.status]}`}>{l.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'tracking' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Meta Pixel ID</h4>
                <p className="text-white/40 text-sm mb-3">Ingresa tu Pixel de Meta para rastrear conversiones.</p>
                <div className="flex gap-3">
                  <input placeholder="123456789012345" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50" />
                  <button className="px-5 py-3 bg-amber-400 text-black font-semibold rounded-xl text-sm">Guardar</button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Conversions API Token</h4>
                <p className="text-white/40 text-sm mb-3">Token para la API de conversiones del lado del servidor.</p>
                <div className="flex gap-3">
                  <input type="password" placeholder="••••••••••••••••" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50" />
                  <button className="px-5 py-3 bg-amber-400 text-black font-semibold rounded-xl text-sm">Guardar</button>
                </div>
              </div>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-5">
                <p className="text-amber-400/80 text-sm">Evento <code className="bg-amber-400/10 px-1 rounded">Lead</code> configurado · Pixel activo y recibiendo eventos.</p>
              </div>
            </div>
          )}

          {activeTab === 'whatsapp' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Número de WhatsApp Business</h4>
                <p className="text-white/40 text-sm mb-3">Los leads serán redirigidos a este número.</p>
                <div className="flex gap-3">
                  <input placeholder="+52 55 1234 5678" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50" />
                  <button className="px-5 py-3 bg-amber-400 text-black font-semibold rounded-xl text-sm">Guardar</button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Mensaje de bienvenida</h4>
                <p className="text-white/40 text-sm mb-3">Texto pre-cargado cuando el usuario hace click en WhatsApp.</p>
                <textarea rows={3} placeholder="Hola, me interesa el diagnóstico gratuito de NURA..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50 resize-none" />
              </div>
            </div>
          )}

          {activeTab === 'gtm' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-1">Google Tag Manager Container ID</h4>
                <p className="text-white/40 text-sm mb-3">Ej: GTM-XXXXXXX</p>
                <div className="flex gap-3">
                  <input placeholder="GTM-XXXXXXX" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400/50" />
                  <button className="px-5 py-3 bg-amber-400 text-black font-semibold rounded-xl text-sm">Guardar</button>
                </div>
              </div>
              <div className="bg-white/3 border border-white/10 rounded-2xl p-5">
                <p className="text-white/50 text-sm">El contenedor de GTM se inyectará automáticamente en el <code className="bg-white/10 px-1 rounded">&lt;head&gt;</code> y <code className="bg-white/10 px-1 rounded">&lt;body&gt;</code> de la página.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
