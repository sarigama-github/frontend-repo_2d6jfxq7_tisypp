import React from 'react'

const features = [
  { title: 'Instant Issuing', desc: 'Create virtual cards on-demand with spending controls.', emoji: '💳' },
  { title: 'Zero-Friction API', desc: 'A single, clean endpoint to start charging customers.', emoji: '⚡️' },
  { title: 'Realtime Insights', desc: 'See transactions and balances update as they happen.', emoji: '📈' },
]

function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
            <div className="text-2xl">{f.emoji}</div>
            <h3 className="mt-3 text-white font-medium">{f.title}</h3>
            <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
