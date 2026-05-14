import React from 'react'
import Hero from '@/components/home-page-aa/Hero'
import About from '@/components/home-page-aa/About'
import DonateCTA from '@/components/home-page-aa/DonateCTA'
import Sponsors from '@/components/home-page-aa/Sponsors'
import Contact from '@/components/home-page-aa/Contact'

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <DonateCTA />
      <Sponsors />
      <Contact />
    </main>
  )
}

export default HomePage
