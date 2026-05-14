import React from 'react'
import { Mail, MapPin } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--aa-cream)]">
      <div className="aa-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.3em] text-[var(--aa-red)] font-bold text-sm">
            Get in Touch
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[var(--aa-navy)] leading-tight">
            Reach the Aces Dugout
          </h2>
          <p className="mt-4 text-lg text-[var(--aa-muted)]">
            Questions about tryouts, sponsorships, or how to get involved? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:info@armstrongacesbaseball.org"
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white border-2 border-[var(--aa-sand)] hover:border-[var(--aa-red)] transition-colors"
          >
            <Mail className="h-10 w-10 text-[var(--aa-red)] mb-3" aria-hidden="true" />
            <p className="font-bold text-[var(--aa-navy)] text-lg">Email</p>
            <p className="mt-1 text-[var(--aa-muted)] break-all">info@armstrongacesbaseball.org</p>
          </a>

          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border-2 border-[var(--aa-sand)]">
            <MapPin className="h-10 w-10 text-[var(--aa-red)] mb-3" aria-hidden="true" />
            <p className="font-bold text-[var(--aa-navy)] text-lg">Location</p>
            <p className="mt-1 text-[var(--aa-muted)]">Goodyear, Arizona</p>
          </div>

          <a
            href="https://www.facebook.com/people/Armstrong-Aces/100090681325027/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white border-2 border-[var(--aa-sand)] hover:border-[var(--aa-red)] transition-colors"
            aria-label="Armstrong Aces on Facebook"
          >
            <FaFacebookF className="h-10 w-10 text-[var(--aa-red)] mb-3" aria-hidden="true" />
            <p className="font-bold text-[var(--aa-navy)] text-lg">Facebook</p>
            <p className="mt-1 text-[var(--aa-muted)]">Follow @ArmstrongAces</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
