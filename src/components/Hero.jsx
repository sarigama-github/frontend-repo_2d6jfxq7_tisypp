import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Friendly habit-support — not a productivity app
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Show up for what matters, one gentle nudge at a time
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl mx-auto lg:mx-0">
            Tend is a lifestyle tool that helps you stay consistent with one small habit — with tiny, human-like nudges and simple streaks. No dashboards. No overwhelm.
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
            <a href="#waitlist" className="inline-flex items-center rounded-full bg-emerald-500 text-white px-5 py-2.5 font-medium hover:bg-emerald-600 transition">
              Join waitlist
            </a>
            <a href="#how" className="inline-flex items-center rounded-full border border-slate-200 text-slate-900 px-5 py-2.5 hover:bg-slate-50 transition">
              See how it works
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200 bg-white">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
