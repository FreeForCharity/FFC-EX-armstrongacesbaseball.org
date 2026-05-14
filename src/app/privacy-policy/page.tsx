import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Armstrong Aces Baseball, a 501(c)(3) youth baseball nonprofit in Goodyear, Arizona.',
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-[140px] pb-16 bg-[var(--aa-cream)] min-h-screen">
      <div className="aa-container">
        <article className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[var(--aa-navy)] mb-6">Privacy Policy</h1>
          <p className="text-sm text-[var(--aa-muted)] mb-8">
            <em>Effective Date: 2026-05-14</em>
          </p>

          <section className="prose max-w-none text-[var(--aa-ink)] space-y-4">
            <p>
              Armstrong Aces Baseball (&quot;we&quot;, &quot;us&quot;) operates{' '}
              <a
                href="https://armstrongacesbaseball.org"
                className="text-[var(--aa-red)] underline"
              >
                armstrongacesbaseball.org
              </a>
              . We respect the privacy of our players, families, donors, and visitors.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">
              Information We Collect
            </h2>
            <p>
              Our website is a static informational site. We do not collect personal information
              through this site directly. When you donate or shop with us, you do so on third-party
              platforms (Givebutter, Team Shop) that have their own privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Givebutter</strong> &mdash; donation processing. See{' '}
                <a
                  href="https://givebutter.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--aa-red)] underline"
                >
                  Givebutter Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>YouTube</strong> &mdash; embedded videos via youtube-nocookie.com.
              </li>
              <li>
                <strong>Facebook</strong> &mdash; outbound links to our Facebook page.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">
              Children&apos;s Privacy
            </h2>
            <p>
              Our club serves youth players. Information about minors is provided by parents or
              guardians during registration handled offline, and is not collected through this
              website.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Contact</h2>
            <p>
              Questions? Reach us at{' '}
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
