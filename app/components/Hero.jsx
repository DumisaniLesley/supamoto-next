import Link from 'next/link'
import React from 'react'

const links = [
  {
      id: 1,
      title: 'Zambia',
      url: '/zm',
  },
  {
      id: 2,
      title: 'Malawi',
      url: '/mw',
  },
  {
      id: 3,
      title: 'Mozambique',
      url: '/mz',
  }
]

const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-6xl ">RENEWABLE HOME ENERGY <br /> <span className="text-orange-600 mt-20 mb-20">FOR EVERYONE!</span></h1>
                <p className='mb-10'></p>
                {links.map((link) => (
                  <div key={link.id} className='mt-6 pb-5 flex-row'>
                      <Link href={link.url} class="mb-5 text-md px-4 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-blue-500">{link.title}</Link>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero