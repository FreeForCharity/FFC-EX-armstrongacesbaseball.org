import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'

const DONATE_URL = 'https://givebutter.com/acesbaseball'
const SHOP_URL = 'https://armstrongacesbaseball.org/shop/'

const DonateCTA: React.FC = () => {
  return (
    <section
      id="donate"
      className="py-20 bg-[var(--aa-navy)] text-[var(--aa-cream)] relative overflow-hidden"
    >
      <div className="aa-stitch-divider absolute top-0 left-0 right-0" />
      <div className="aa-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[var(--aa-red)] font-bold text-sm">
              Support the Aces
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Fuel the Next Generation of Aces.
            </h2>
            <p className="mt-5 text-lg text-[var(--aa-cream)]/90 max-w-xl">
              Every dollar funds field time, equipment, travel, and the volunteer coaches who turn
              raw talent into champions. Donations are processed securely on Givebutter.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--aa-red)] hover:bg-[var(--aa-red-deep)] text-white font-bold uppercase tracking-wide rounded-md transition-colors text-lg"
              >
                Donate on Givebutter
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border-2 border-[var(--aa-cream)] hover:bg-[var(--aa-cream)] hover:text-[var(--aa-navy)] text-[var(--aa-cream)] font-bold uppercase tracking-wide rounded-md transition-colors text-lg"
              >
                Visit Team Shop
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--aa-cream)]/70">
              Armstrong Aces Inc. is a registered 501(c)(3) non profit. Donations are tax-deductible
              to the extent allowed by law.
            </p>
          </div>

          <div>
            <YouTubeEmbed videoId="MLpWrANjFbI" title="Armstrong Aces Baseball" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateCTA
