import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Problema', href: '#problema' },
  { label: 'Método', href: '#metodo' },
  { label: 'Sistema', href: '#sistema' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-serif text-2xl font-bold tracking-wider">
          <span className="text-gradient-amber">NURA</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onOpenModal}
            className="px-5 py-2 text-sm font-medium bg-amber-400 text-black rounded-full hover:bg-amber-300 transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Agendar diagnóstico
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</a>
          ))}
          <button onClick={() => { onOpenModal(); setMenuOpen(false) }} className="mt-2 px-5 py-2 text-sm font-medium bg-amber-400 text-black rounded-full">
            Agendar diagnóstico
          </button>
        </div>
      )}
    </nav>
  )
}
