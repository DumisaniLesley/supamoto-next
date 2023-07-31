import React from 'react'
import { BiBell, BiBitcoin, BiCreditCard, BiPhoneIncoming, BiPhoneCall } from 'react-icons/bi'
import countries from '@/public/about/countries.png'
import customer from '@/public/about/customer.png'
import distribution from '@/public/about/distribution.png'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left'>
            <div>
                <div className='flex items-center justify-center'>
                    <Image src={countries} width={70} height={40} alt='icon'/>
                </div>
                <h1 className='mt-4 text-xl font-bold text-center'>Find Your Nearest Shop</h1>
                <p className='mt-2 text-gray-500 text-center'>With our conveniently located shops, you can buy SupaMoto Pellets and Stoves with ease. </p>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <Image src={distribution} width={70} height={40} alt='icon'/>
                </div>
                <h1 className='mt-4 text-xl font-bold text-gray-800 text-center'>Pellet Deliveries</h1>
                <p className='mt-2 text-gray-500 text-center'>Simply place your order, and we'll take care of the rest, delivering the required amount of pellets right to your doorstep.</p>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <Image src={customer} width={70} height={40} alt='icon'/> 
                </div>
                <h1 className='mt-4 text-xl font-bold text-gray-800 text-center'>Exceptional Customer Support</h1>
                <p className='mt-2 text-gray-500 text-center'>Our call center is staffed with a team of dedicated professionals fluent in nine different languages, ready to assist you.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features