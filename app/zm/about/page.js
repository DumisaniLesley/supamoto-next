import React from 'react'
import Hero from './Hero'
// import Team from './team'
import Features from './Features'
import Brands from './Brands'
import Socials from './Socials'

const page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Brands />
      {/* <Team /> */}
      <Socials />
    </>
  )
}

export default page