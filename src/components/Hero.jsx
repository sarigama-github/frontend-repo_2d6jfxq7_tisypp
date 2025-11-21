import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now in private beta
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            The minimalist card for modern fintech micro‑SaaS
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto lg:mx-0">
            Accept payments, issue virtual cards, and reconcile in seconds. A clean API and beautiful UI with glassmorphic aesthetics.
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
            <a href="#waitlist" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 font-medium hover:bg-blue-50 transition">
              Join waitlist
            </a>
            <a href="#features" className="inline-flex items-center rounded-full border border-white/15 text-white px-5 py-2.5 hover:bg-white/5 transition">
              Explore features
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient overlay to blend */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
