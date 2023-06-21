import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-6xl ">RENEWABLE HOME ENERGY <br /> <span className="text-orange-600 mb-20">FOR EVERYONE!</span></h1>
                <p className='mb-10'></p>
                <Link href='/zm/contact' class="mt-10 text-center w-full px-5 py-4 text-md font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-blue-500">Get In Touch</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero