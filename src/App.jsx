import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Missions from './components/Missions'
import System from './components/System'
import Results from './components/Results'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import AdminPanel from './components/AdminPanel'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [adminOpen, setAdminOpen] = useState(false)

  // Secret admin access: triple-click on footer logo
  const handleLogoTripleClick = () => setAdminOpen(true)

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Problem onOpenModal={() => setModalOpen(true)} />
      <Missions onOpenModal={() => setModalOpen(true)} />
      <System onOpenModal={() => setModalOpen(true)} />
      <Results onOpenModal={() => setModalOpen(true)} />
      <About />
      <FAQ />
      <Footer onOpenModal={() => setModalOpen(true)} onAdminAccess={handleLogoTripleClick} />

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />

      {/* Hidden admin trigger */}
      <button
        onClick={() => setAdminOpen(true)}
        className="fixed bottom-4 right-4 w-8 h-8 opacity-0 hover:opacity-10 bg-white rounded-full transition-opacity"
        title="Admin"
      />
    </div>
  )
}
