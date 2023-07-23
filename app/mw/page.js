import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default page