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

        {/* Horizontal sponsor name bar — intentional no-logo treatment */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4" aria-label="Sponsor logos">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="inline-flex items-center px-5 py-3 rounded-full bg-[var(--aa-navy)] hover:bg-[var(--aa-red)] transition-colors group"
            >
              <span className="text-[var(--aa-cream)] font-black uppercase tracking-[0.15em] text-sm group-hover:text-white transition-colors whitespace-nowrap">
                {s.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-[var(--aa-muted)]">
          Interested in sponsoring the Aces?{' '}
          <a
            href="mailto:info@armstrongacesbaseball.org"
            className="text-[var(--aa-red)] font-semibold hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}

export default Sponsors
