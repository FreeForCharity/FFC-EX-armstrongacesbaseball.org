import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Armstrong Aces Baseball website.',
}

export default function TermsOfService() {
  return (
    <div className="pt-[140px] pb-16 bg-[var(--aa-cream)] min-h-screen">
      <div className="aa-container">
        <article className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[var(--aa-navy)] mb-6">Terms of Service</h1>
          <p className="text-sm text-[var(--aa-muted)] mb-8">
            <em>Effective Date: 2026-05-14</em>
          </p>

          <section className="prose max-w-none text-[var(--aa-ink)] space-y-4">
            <p>
              These terms govern your use of armstrongacesbaseball.org. By using this site you agree
              to them.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Use of Content</h2>
            <p>
              Content on this site (text, images, logos) is the property of Armstrong Aces Inc.
              unless otherwise noted. You may not copy or redistribute it without permission.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">External Links</h2>
            <p>
              We link to third-party sites (Givebutter, Team Shop, YouTube, Facebook). We are not
              responsible for the content or practices of those sites.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Donations</h2>
            <p>
              Donations are processed by Givebutter. Armstrong Aces Inc. is a registered 501(c)(3)
              non profit; donations are tax-deductible to the extent allowed by law.
            </p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Disclaimer</h2>
            <p>This site is provided &quot;as is&quot; without warranties of any kind.</p>

            <h2 className="text-2xl font-bold text-[var(--aa-navy)] mt-8">Contact</h2>
            <p>
              Email{' '}
              <a
                href="mailto:info@armstrongacesbaseball.org"
                className="text-[var(--aa-red)] underline"
              >
                info@armstrongacesbaseball.org
              </a>{' '}
              for questions.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
