import Image from 'next/image'
import React from 'react'
import Zambeef from '@/public/clients/zambeef.png'
import Famliy from '@/public/clients/legacy.png'
import Chiche from '@/public/clients/chiche.png'
import Living from '@/public/clients/living.png'

const Brands = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-10 mx-auto'>
        <div className='lg:flex lg:items-center'>
            <div className='w-full space-y-12 lg:w-1/2 '>
                <div className='text-center lg:text-left'>
                    <h1 className='text-2xl font-bold capitalize lg:text-3xl'>Our Most Estimeed <br/> Clients</h1>

                    <div className='mt-2 mb-4'>
                        <span className='inline-block w-40 h-1 bg-orange-500 rounded-full'></span>
                        <span className='inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full'></span>
                        <span className='inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full'></span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4'>
                <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                    <Image src={Zambeef} width={200} height={40} alt='Zambeef' />
                </div>
                <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                    <Image src={Famliy} width={200} height={40} alt='Family Legacy' />
                </div>
                <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                    <Image src={Chiche} width={200} height={40} alt='Chichetekelo' />
                </div>
                <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                    <Image src={Living} width={200} height={40} alt='Living Hope' />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Brands