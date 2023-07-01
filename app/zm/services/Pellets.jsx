import Image from 'next/image'
import React from 'react'
import pellets5kg from '@/public/products/5kgs.png'
import pellets20kg from '@/public/products/20kgs.png'
import pellets30kg from '@/public/products/30kgs.png'
import pellets50kg from '@/public/products/50kgs.png'

const Pellets = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-2 mx-auto'>
        <div className='grid grid-cols-2 gap-8 mt-2 xl:mt-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-4 justify-center items-center'>
            <div className='p-5'>
                <Image src={pellets5kg} width={100} height={50} alt='Logo' />
                <h1 className='text-sm font-semibold text-gray-700 capitalize'>elegant Dark Mode</h1>
            </div>
            <div className='p-5'>
                <Image src={pellets20kg} width={100} height={50} alt='Logo' />
                <h1 className='text-sm font-semibold text-gray-700 capitalize'>elegant Dark Mode</h1>
            </div>
            <div className='p-5'>
                <Image src={pellets30kg} width={100} height={50} alt='Logo' />
                <h1 className='text-sm font-semibold text-gray-700 capitalize'>elegant Dark Mode</h1>
            </div>
            <div className='p-5'>
                <Image src={pellets50kg} width={100} height={50} alt='Logo' />
                <h1 className='text-sm font-semibold text-gray-700 capitalize'>elegant Dark Mode</h1>
            </div>
        </div>
    </div>
</section>
  )
}

export default Pellets