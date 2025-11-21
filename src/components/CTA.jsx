import React from 'react'

function CTA() {
  return (
    <section id="waitlist" className="relative py-20">
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
          Stay in the loop — join the private beta
        </h2>
        <p className="mt-3 text-slate-600">
          Get early access to Tend and help us shape a calm, friendly habit tool.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            required
            placeholder="you@tend.com"
            className="w-full sm:w-auto flex-1 rounded-full bg-white border border-slate-200 px-5 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            aria-label="Email address"
          />
          <button type="submit" className="rounded-full bg-emerald-500 text-white px-6 py-3 font-medium hover:bg-emerald-600 transition">
            Request access
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default CTA
