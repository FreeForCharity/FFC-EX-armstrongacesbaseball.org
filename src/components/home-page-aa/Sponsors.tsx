import React from 'react'

interface Sponsor {
  name: string
  url?: string
}

const sponsors: Sponsor[] = [
  { name: 'Ride Now Motorsports' },
  { name: "Raising Cane's" },
  { name: 'Pizza Hut' },
  { name: 'Turntable Marketing' },
]

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="aa-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.3em] text-[var(--aa-red)] font-bold text-sm">
            Our Backers
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[var(--aa-navy)] leading-tight">
            Big Thanks to Our Sponsors
          </h2>
          <p className="mt-4 text-lg text-[var(--aa-muted)]">
            Local businesses making youth baseball possible in Goodyear, AZ.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6" aria-label="Sponsor logos">
          {sponsors.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-center min-h-[120px] rounded-xl border-2 border-[var(--aa-sand)] bg-[var(--aa-cream)]/60 hover:border-[var(--aa-red)] transition-colors p-6"
            >
              <span className="text-center font-bold text-[var(--aa-navy)] text-lg leading-tight">
                {s.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Sponsors
