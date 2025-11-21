import React from 'react'

function CTA() {
  return (
    <section id="waitlist" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight">
          Build your fintech micro‑SaaS on a beautiful foundation
        </h2>
        <p className="mt-3 text-white/70">
          Join the private beta to get early access and help shape the roadmap.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full sm:w-auto flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          />
          <button type="submit" className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-blue-50 transition">
            Request access
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default CTA
