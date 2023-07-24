import Image from 'next/image'
import Link from 'next/link'
// import hero from '../../../public/hero.svg'
import hero from '@/public/team.svg'

const Hero = () => {
  return (
    <div className='container max-w-6xl px-6 py-16 mx-auto'>
        <div className='items-center lg:flex mt-24 md:mt-40'>
            <div className='w-full lg:w-1/2'>
                <div className='lg:max-w-lg'>
                    <h1 className='text-center md:text-left text-3xl sm:text-6xl font-bold text-gray-800 lg:text-4xl'>Renewable Clean Energy<br/> For All <span className='text-orange-600 '>Mozambique</span></h1>
                    <p className='mt-3 text-center md:text-left text-gray-600 mb-10'>We offer Clean Cooking, with a 100% Zambia sustainable fuel branded SupaMoto, and Stoves specifically designed for both Households and Businesses, as well as Solar products for Households, Small Businesses and Productive Use.</p>
                    <div className='flex justify-center items-center md:justify-start'>
                        <Link href='/zm/contact' className='text-center w-full px-5 py-4 text-md font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-blue-500'>Get In Touch</Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                <Image src={hero} width={800} height={400} alt='Hero Image' />
            </div>
        </div>
    </div>
  )
}

export default Hero