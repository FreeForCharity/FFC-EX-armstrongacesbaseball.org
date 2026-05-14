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

          {/* Hero diamond emblem */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="aspect-square w-[260px] md:w-[360px] rotate-45 rounded-2xl border-4 border-[var(--aa-red)] bg-gradient-to-br from-[var(--aa-navy-deep)] to-[var(--aa-navy)] shadow-2xl"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[var(--aa-red)] font-black text-7xl md:text-9xl leading-none drop-shadow-lg">
                    AA
                  </p>
                  <p className="mt-2 text-[var(--aa-cream)] uppercase tracking-[0.4em] text-xs md:text-sm">
                    Aces Baseball
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
