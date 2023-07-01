import React from 'react'
import { BiBell, BiBitcoin, BiCreditCard, BiPhoneIncoming, BiPhoneCall } from 'react-icons/bi'

const Features = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left'>
            <div>
                <div className='flex items-center justify-center'>
                    <BiPhoneIncoming size={100}/>
                </div>
                <h1 className='mt-4 text-xl font-bold text-center'>Some Text Here</h1>
                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <BiPhoneCall size={100} />
                </div>
                <h1 className='mt-4 text-xl font-bold text-gray-800 text-center'>Some Text Here</h1>
                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <BiCreditCard size={100} />    
                </div>
                <h1 className='mt-4 text-xl font-bold text-gray-800 text-center'>Some Text Here</h1>
                <p className='mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features