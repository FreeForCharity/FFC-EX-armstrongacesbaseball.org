'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

interface MenuItem {
  label: string
  path: string
  external?: boolean
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'About', path: '/#about' },
      { label: 'Sponsors', path: '/#sponsors' },
      { label: 'Contact', path: '/#contact' },
      {
        label: 'Team Shop',
        path: 'https://armstrongacesbaseball.org/shop/',
        external: true,
      },
      {
        label: 'Donate',
        path: 'https://givebutter.com/acesbaseball',
        external: true,
      },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileMenuOpen(false)

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'h-[60px] bg-[var(--aa-navy)] shadow-lg'
          : 'h-[84px] bg-[var(--aa-navy)]/95 backdrop-blur'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center px-4 sm:px-6 transition-all duration-300">
            {/* Logo / Brand mark */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-3 group"
              aria-label="Armstrong Aces Baseball home"
            >
              <span
                className={`flex items-center justify-center rounded-full border-2 border-[var(--aa-red)] bg-[var(--aa-navy-deep)] text-[var(--aa-cream)] font-bold transition-all duration-300 ${
                  isScrolled ? 'h-9 w-9 text-sm' : 'h-12 w-12 text-base'
                }`}
              >
                AA
              </span>
              <span
                className={`text-[var(--aa-cream)] font-bold tracking-wide transition-all duration-300 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}
              >
                Armstrong Aces
              </span>
            </Link>

            <div className="flex items-center justify-end ml-auto">
              {/* Desktop Menu */}
              <nav className="hidden lg:block" aria-label="Primary">
                <ul className="flex items-center gap-1">
                  {menuItems.map((item, index) => {
                    const isExternal = item.external
                    const cls =
                      'px-3 py-2 text-[14px] font-semibold transition-colors duration-200 text-[var(--aa-cream)] hover:text-white'
                    const ctaCls =
                      'ml-2 px-4 py-2 text-[14px] font-bold uppercase tracking-wide bg-[var(--aa-red)] hover:bg-[var(--aa-red-deep)] text-white rounded transition-colors duration-200'
                    const useCta = item.label === 'Donate' || item.label === 'Team Shop'

                    return (
                      <li key={index}>
                        {isExternal ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={useCta ? ctaCls : cls}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link href={item.path} onClick={handleLinkClick} className={cls}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--aa-cream)] hover:text-white"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
            isScrolled ? 'top-[60px]' : 'top-[84px]'
          }`}
        >
          <div className="mx-auto max-w-[700px] px-6 py-4 bg-[var(--aa-navy-deep)] border-t-[3px] border-[var(--aa-red)] shadow-lg max-h-[80vh] overflow-auto">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="block px-4 py-3 rounded-lg text-sm font-semibold text-[var(--aa-cream)] hover:bg-[var(--aa-navy)] hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 rounded-lg text-sm font-semibold text-[var(--aa-cream)] hover:bg-[var(--aa-navy)] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
