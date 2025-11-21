import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative border-t border-white/10 mt-10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Lumen Card — minimal fintech infrastructure for builders
        </div>
      </footer>
    </div>
  )
}

export default App
