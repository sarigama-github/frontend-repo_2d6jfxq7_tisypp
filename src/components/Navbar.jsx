import React from 'react'

function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg shadow-blue-500/30" />
          <span className="text-white/90 font-semibold tracking-tight">Lumen Card</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/70 hover:text-white transition">FAQ</a>
          <a href="#waitlist" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:bg-blue-50 transition">Join waitlist</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
