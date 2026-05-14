'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-[var(--aa-navy-deep)] text-[var(--aa-cream)]">
      <div className="aa-stitch-divider" />
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Armstrong Aces Baseball</h3>
          <p className="text-[15px] leading-relaxed">
            A 501(c)(3) youth baseball club building Aces in Goodyear, Arizona — fierce,
            unstoppable, and driven.
          </p>
          <p className="text-[13px] text-[var(--aa-cream)]/80">
            Armstrong Aces Inc. is a registered 501(c)(3) non profit.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-[15px]">
            {[
              { name: 'Home', href: '/#hero', external: false },
              { name: 'About', href: '/#about', external: false },
              { name: 'Sponsors', href: '/#sponsors', external: false },
              { name: 'Contact', href: '/#contact', external: false },
              {
                name: 'Donate (Givebutter)',
                href: 'https://givebutter.com/acesbaseball',
                external: true,
              },
              {
                name: 'Team Shop',
                href: 'https://armstrongacesbaseball.org/shop/',
                external: true,
              },
            ].map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:tracking-wide transition-all font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-white hover:tracking-wide transition-all font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="space-y-2 pt-4">
            <h4 className="text-lg font-bold text-white">Policies</h4>
            <ul className="space-y-1 text-[14px]">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Contact</h3>

          <a
            href="mailto:info@armstrongacesbaseball.org"
            className="flex items-start gap-3 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 text-[var(--aa-red)] flex-shrink-0 mt-0.5" />
            <span className="text-[15px] break-all">info@armstrongacesbaseball.org</span>
          </a>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-[var(--aa-red)] flex-shrink-0 mt-0.5" />
            <span className="text-[15px]">Goodyear, Arizona</span>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.facebook.com/people/Armstrong-Aces/100090681325027/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[var(--aa-red)] p-2 rounded-full hover:bg-[var(--aa-red-deep)] transition-colors"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 border-t border-[var(--aa-navy)] text-center text-[14px] font-medium">
        <p>
          &copy; {currentYear} Armstrong Aces Inc. All rights reserved. Hosted by{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--aa-red)] hover:text-white transition-colors"
          >
            Free For Charity
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
