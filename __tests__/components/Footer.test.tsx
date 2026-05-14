import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

expect.extend(toHaveNoViolations)

describe('Armstrong Aces Footer', () => {
  it('renders a contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the organization brand block', () => {
    render(<Footer />)
    expect(screen.getByText('Armstrong Aces Baseball')).toBeInTheDocument()
  })

  it('displays the current year in the copyright bar', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('exposes the email contact', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const email = links.find((l) =>
      l.getAttribute('href')?.includes('mailto:info@armstrongacesbaseball.org')
    )
    expect(email).toBeDefined()
  })

  it('exposes the Facebook social link', () => {
    render(<Footer />)
    const fb = screen.getByLabelText('Facebook')
    expect(fb).toHaveAttribute(
      'href',
      'https://www.facebook.com/people/Armstrong-Aces/100090681325027/'
    )
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
