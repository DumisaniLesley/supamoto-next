import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Footer from './components/Footer'
import Contact from './components/Contact'

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