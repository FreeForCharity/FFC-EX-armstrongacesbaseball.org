import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How the Armstrong Aces Baseball website uses cookies and similar technologies, and your choices.',
}

export default function CookiePolicy() {
  return (
    <div className="pt-[140px] pb-16 bg-[var(--aa-cream)] min-h-screen">
      <div className="aa-container">
        <article className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[var(--aa-navy)] mb-6">Cookie Policy</h1>
          <p className="text-sm text-[var(--aa-muted)] mb-8">
            <em>Effective Date: 2026-05-14</em>
          </p>

          <section className="prose max-w-none text-[var(--aa-ink)] space-y-4">
            <p>
              This policy explains how the Armstrong Aces Baseball website
              (armstrongacesbaseball.org) uses cookies and similar technologies, and how you can
              control them.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device. They help websites function,
              remember preferences, and measure how a site is used.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">How we use cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Necessary and functional.</strong> A small amount of information may be
                stored to make the site work and to remember your cookie choices. These are set
                regardless of consent because the site cannot function without them.
              </li>
              <li>
                <strong>Analytics.</strong> We use Google Tag Manager and Google Analytics 4 to
                understand aggregate site usage. Analytics runs by default, so Google Analytics 4
                sets a first-party analytics cookie (for example, <code>_ga</code>) when you visit.
                You can decline analytics at any time using the cookie banner (see below).
              </li>
              <li>
                <strong>Third-party.</strong> Some pages link to or embed outside services (for
                example, Givebutter, our Team Shop, YouTube, or Facebook), and those services may
                set their own cookies when used.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Managing your choices</h2>
            <p>
              Analytics runs by default so we can measure aggregate usage, but you are always free
              to opt out. Our cookie-consent banner lets you decline (or customize) non-essential
              cookies: declining stops analytics on this browser and removes analytics cookies such
              as <code>_ga</code>. You can also clear this site&apos;s cookies and stored data in
              your browser settings, which brings the banner back on your next visit so you can
              choose differently.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a
                href="mailto:info@armstrongacesbaseball.org"
                className="text-[var(--aa-red)] underline"
              >
                info@armstrongacesbaseball.org
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
