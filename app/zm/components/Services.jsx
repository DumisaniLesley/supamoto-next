import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='bg-white mt-8 md:mt-20'>
    <div className='container max-w-6xl px-5 py-10 mx-auto'>
        <h1 className='text-2xl font-bold text-center md:text-left text-gray-800 uppercase lg:text-4xl'>Our Services</h1>
        <p className='my-2 text-center md:text-left font-medium mb-20'>We are dedicated to delivering high-quality products and services that cater to your cooking needs while prioritizing environmental responsibility. Our core offerings include SupaMoto Pellets and a wide range of pellet stoves.</p>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2'>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl '>
                <span className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
                    </svg>
                </span>
                <h1 className='text-xl font-semibold text-gray-700 capitalize'>SupaMoto® Pellets</h1>
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
                <Link href='/zm/services' className='flex items-center -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform hover:text-blue-600'>
                    <span className='mx-1'>read more</span>
                    <svg className='w-4 h-4 mx-1 rtl:-scale-x-100' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                </Link>
            </div>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <span className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
                    </svg>
                </span>
                <h1 className='text-xl font-semibold text-gray-700 capitalize '>SupaMoto Stoves</h1>
                <p className='text-gray-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
                <Link href='/zm/services' className='flex items-center -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform hover:text-blue-600'>
                    <span className='mx-1'>read more</span>
                    <svg className='w-4 h-4 mx-1 rtl:-scale-x-100' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services