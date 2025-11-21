import React from 'react'

function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500" aria-hidden="true" />
          <span className="text-slate-900 font-semibold tracking-tight">Tend</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#how" className="text-slate-600 hover:text-slate-900 transition">How it works</a>
          <a href="#why" className="text-slate-600 hover:text-slate-900 transition">Why Tend</a>
          <a href="#philosophy" className="text-slate-600 hover:text-slate-900 transition">Philosophy</a>
          <a href="#waitlist" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-4 py-2 font-medium hover:bg-emerald-600 transition">Join waitlist</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
