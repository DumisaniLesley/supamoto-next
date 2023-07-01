import Link from 'next/link'
import Logo from '@/public/supamoto.png'
import Image from 'next/image'

const Footer = () => {
  return (
    
    <footer className='bg-white mt-20'>
        <hr className='my-3 border-black max-w-6xl mx-auto md:my-10'/>
      <div className='container max-w-6xl px-6 p-6 mx-auto'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            <div>
                <p className='font-bold '>Quick Link</p>

                <div className='flex flex-col items-start mt-5 space-y-2'>
                    <Link href='/zm/' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>Home</Link>
                    <Link href='/zm/about' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>Who We Are</Link>
                    <Link href='/zm/services' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>What We Do</Link>
                </div>
            </div>

            <div>
                <p className='font-bold '>Terms & Conditions</p>

                <div className='flex flex-col items-start mt-5 space-y-2'>
                    <Link href='/zm/terms' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>Terms</Link>
                    <Link href='/zm/privacy' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>Privacy Policy</Link>
                </div>
            </div>

            <div>
                <p className='font-bold '>Contact Us</p>

                <div className='flex flex-col items-start mt-5 space-y-2'>
                    <p href='#' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>info@supamoto.co.zm</p>
                    <p href='#' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>Toll Free: 2233</p>
                    <p href='#' className='text-gray-600 transition-colors duration-300 hover:text-orange-500'>+260 211 295 117</p>
                </div>
            </div>
        </div>
        
        <hr className='my-3 border-black md:my-10'/>
        <div className='flex flex-col items-center justify-between sm:flex-row mt-10'>
            <a href='#'>
                <Image src={Logo} width={100} height={50} alt='Logo' />
            </a>
            <p className='mt-4 text-sm text-gray-500 sm:mt-0'>© Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
  </footer>
  )
}

export default Footer