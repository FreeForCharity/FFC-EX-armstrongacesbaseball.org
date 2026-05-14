import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

expect.extend(toHaveNoViolations)

describe('Armstrong Aces Header', () => {
  it('renders the header banner', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('exposes an accessible home link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Armstrong Aces Baseball home' })).toBeInTheDocument()
  })

  it('renders the primary nav with About and Sponsors entries', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Sponsors')).toBeInTheDocument()
  })

  it('preserves the Givebutter donate URL', () => {
    render(<Header />)
    const donate = screen.getAllByText('Donate')
    expect(donate.length).toBeGreaterThan(0)
    const donateLink = donate[0].closest('a')
    expect(donateLink).toHaveAttribute('href', 'https://givebutter.com/acesbaseball')
    expect(donateLink).toHaveAttribute('target', '_blank')
    expect(donateLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('preserves the Team Shop URL', () => {
    render(<Header />)
    const shop = screen.getAllByText('Team Shop')
    const shopLink = shop[0].closest('a')
    expect(shopLink).toHaveAttribute('href', 'https://armstrongacesbaseball.org/shop/')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
