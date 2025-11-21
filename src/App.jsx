import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden />

      <Navbar />
      <Hero />

      {/* Why Tend */}
      <section id="why" className="relative py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Tend exists</h2>
            <p className="mt-3 text-slate-600">
              People don’t fail due to lack of motivation — they miss the gentle push at the right moment. Tend is that friendly nudge that helps you build small habits, stay consistent, and feel good about simple progress.
            </p>
          </div>
        </div>
      </section>

      <Features />

      {/* Philosophy */}
      <section id="philosophy" className="relative pb-6">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The philosophy behind Tend</h2>
            <p className="mt-3 text-slate-600">
              Small daily actions lead to meaningful long‑term change. Like tending a plant a little every day, Tend helps you grow — calmly and consistently.
            </p>
          </div>
        </div>
      </section>

      <CTA />

      <footer className="relative border-t border-slate-200 mt-10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Tend — a productively lifestyle tool for calm consistency
        </div>
      </footer>
    </div>
  )
}

export default App
