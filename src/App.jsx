import React from 'react'
import Hero from './components/Hero'
import Bento from './components/Bento'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-amber-300 to-amber-600" />
            <span className="text-sm font-semibold tracking-wider text-white">MIDAS</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#bento" className="hover:text-white">Cómo funciona</a>
            <a href="#pricing" className="hover:text-white">Planes</a>
            <a href="#" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Login</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Bento />
        <Pricing />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} MIDAS. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default App
