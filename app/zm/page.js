import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Companies from './components/Companies'
import Blog from './components/Blog'
import CTA from './components/CTA'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Companies />
      <Blog />
      <CTA />
    </>
  )
}

export default page