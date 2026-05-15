import React from 'react'

const DONATE_URL = 'https://givebutter.com/acesbaseball'
const SHOP_URL = 'https://armstrongacesbaseball.org/shop/'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-[120px] pb-20 md:pt-[140px] md:pb-28 bg-[var(--aa-navy)] text-[var(--aa-cream)] overflow-hidden"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(200,16,46,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06), transparent 50%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 aa-stitch-divider" />

      <div className="relative aa-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="uppercase tracking-[0.3em] text-[var(--aa-red)] font-bold text-sm mb-4">
              13U Youth Baseball &middot; Goodyear, AZ
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white">
              Unleash Your <span className="text-[var(--aa-red)]">Inner Ace</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--aa-cream)]/90 max-w-xl">
              Top youth baseball in Goodyear, Arizona. Turning coaches into mentors and players into
              Aces &mdash; fierce, unstoppable, and driven.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--aa-red)] hover:bg-[var(--aa-red-deep)] text-white font-bold uppercase tracking-wide rounded-md transition-colors"
              >
                Donate
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[var(--aa-cream)] hover:bg-[var(--aa-cream)] hover:text-[var(--aa-navy)] text-[var(--aa-cream)] font-bold uppercase tracking-wide rounded-md transition-colors"
              >
                Team Shop
              </a>
            </div>
          </div>

          {/* Hero emblem card */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              className="relative w-[260px] md:w-[320px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--aa-red)]/30"
              aria-hidden="true"
            >
              {/* Background with baseball diamond pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--aa-navy-deep)] via-[var(--aa-navy)] to-[#0a1428]" />
              {/* Decorative diamond field lines */}
              <div className="absolute inset-0 opacity-[0.07] aa-grid-overlay" aria-hidden="true" />
              {/* Red accent bar at top */}
              <div className="relative z-10 h-2 bg-[var(--aa-red)]" />
              {/* Emblem content */}
              <div className="relative z-10 flex flex-col items-center justify-center py-12 px-8">
                <p className="text-[var(--aa-red)] font-black text-[6rem] md:text-[7rem] leading-none drop-shadow-lg tracking-tighter">
                  AA
                </p>
                <div className="mt-3 w-16 h-0.5 bg-[var(--aa-red)]" />
                <p className="mt-3 text-[var(--aa-cream)] uppercase tracking-[0.35em] text-xs font-bold">
                  Aces Baseball
                </p>
                <p className="mt-1 text-[var(--aa-cream)]/60 uppercase tracking-[0.2em] text-[0.65rem]">
                  Goodyear, AZ · 13U
                </p>
              </div>
              {/* Red accent bar at bottom */}
              <div className="relative z-10 h-2 bg-[var(--aa-red)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
