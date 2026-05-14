import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[var(--aa-cream)]">
      <div className="aa-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="uppercase tracking-[0.3em] text-[var(--aa-red)] font-bold text-sm">
              About the Club
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[var(--aa-navy)] leading-tight">
              Big-League Upgrades for the Aces Family.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-[var(--aa-ink)] text-lg leading-relaxed">
            <p>
              Armstrong Aces Baseball is a Goodyear, Arizona 13U youth baseball club dedicated to
              developing the whole player &mdash; on the field and off.
            </p>
            <p>
              We&apos;re transforming <strong>coaches into mentors</strong>, and{' '}
              <strong>players into Aces</strong>. Every member of this club is fierce, unstoppable,
              and driven to achieve greatness.
            </p>
            <p>
              The club is in a season of big-league upgrades &mdash; new facilities, new
              partnerships, and a refreshed identity &mdash; all in service of our players,
              families, and community. Your support keeps the dugout full and the bats swinging.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-4 border-[var(--aa-red)] pl-4">
                <dt className="uppercase text-xs tracking-widest text-[var(--aa-muted)] font-bold">
                  Age Group
                </dt>
                <dd className="text-2xl font-bold text-[var(--aa-navy)]">13U</dd>
              </div>
              <div className="border-l-4 border-[var(--aa-red)] pl-4">
                <dt className="uppercase text-xs tracking-widest text-[var(--aa-muted)] font-bold">
                  Home
                </dt>
                <dd className="text-2xl font-bold text-[var(--aa-navy)]">Goodyear, AZ</dd>
              </div>
              <div className="border-l-4 border-[var(--aa-red)] pl-4">
                <dt className="uppercase text-xs tracking-widest text-[var(--aa-muted)] font-bold">
                  Status
                </dt>
                <dd className="text-2xl font-bold text-[var(--aa-navy)]">501(c)(3)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
