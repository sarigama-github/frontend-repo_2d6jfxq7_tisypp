import React from 'react'

const features = [
  { title: 'One habit, full focus', desc: 'Pick a single small action and show up daily — no clutter, no complex setup.', emoji: '🌱' },
  { title: 'Human-like nudges', desc: 'Gentle, friendly messages at the right moment — more like a friend than a notification.', emoji: '💬' },
  { title: 'Simple streaks', desc: 'Reply “Done” and Tend tracks your momentum. Tiny wins that compound over time.', emoji: '✨' },
]

function Features() {
  return (
    <section id="how" className="relative py-16">
      <div className="relative mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
            <div className="text-2xl" aria-hidden>{f.emoji}</div>
            <h3 className="mt-3 text-slate-900 font-medium">{f.title}</h3>
            <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
