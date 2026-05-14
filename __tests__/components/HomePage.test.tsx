import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../../src/app/home-page'

describe('HomePage (Armstrong Aces)', () => {
  it('renders the hero tagline', () => {
    render(<HomePage />)
    expect(screen.getByText(/Unleash Your/i)).toBeInTheDocument()
    expect(screen.getByText(/Inner Ace/i)).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<HomePage />)
    // Multiple matches expected: section heading + sponsors heading text fragments
    const matches = screen.getAllByText(/Big-League Upgrades/i)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('renders the Sponsors grid with all known sponsors', () => {
    render(<HomePage />)
    expect(screen.getByText('Ride Now Motorsports')).toBeInTheDocument()
    expect(screen.getByText(/Raising Cane/i)).toBeInTheDocument()
    expect(screen.getByText('Pizza Hut')).toBeInTheDocument()
    expect(screen.getByText('Turntable Marketing')).toBeInTheDocument()
  })

  it('preserves the Givebutter donate URL in the donate CTA', () => {
    render(<HomePage />)
    const donateButtons = screen.getAllByText(/Donate/i)
    expect(donateButtons.length).toBeGreaterThan(0)
    const link = donateButtons
      .map((n) => n.closest('a'))
      .find((a) => a?.getAttribute('href') === 'https://givebutter.com/acesbaseball')
    expect(link).toBeTruthy()
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Contact section with email', () => {
    render(<HomePage />)
    const email = screen.getByText('info@armstrongacesbaseball.org')
    expect(email).toBeInTheDocument()
  })

  it('renders the YouTube lite-embed trigger button (not the iframe by default)', () => {
    render(<HomePage />)
    const btn = screen.getByRole('button', {
      name: /Armstrong Aces Baseball/i,
    })
    expect(btn).toBeInTheDocument()
    // Iframe should NOT be in the document until clicked
    expect(document.querySelector('iframe')).toBeNull()
  })
})
