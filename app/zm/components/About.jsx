import Image from 'next/image'
import Link from 'next/link'
import aboutImage from '@/public/about.png'

const About = () => {
  return (
    <section className="bg-white mt-4 md:mt-20 ">
    <div className="container max-w-6xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-4xl tracking-wider mb-20">About Us</h1>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <Image src={aboutImage} alt="About" width={300} height={300} className='object-contain w-full lg:mx-6 lg:w-1/2 rounded-xl h-80 lg:h-[32rem]'/>
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 tracking-wide px-4">
                <p className="mt-3 text-md font-medium md:text-lg text-center md:text-left">
                SupaMoto is a Zambian company that is committed to advancing clean cooking in Zambia. We offer a variety of products and services that help households and businesses cook more safely, efficiently, and sustainably.
                Our core product is SupaMoto pellets, which are made from 100% Zambian sustainable biomass. SupaMoto pellets are a clean, efficient, and affordable alternative to traditional cooking fuels such as wood, charcoal, and kerosene. 
                </p>
                <div className='flex justify-center items-center md:justify-start mt-8 md:mt-4'>
                    <Link href='/zm/about' class="text-center w-full px-5 py-4 text-md font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-blue-500">More About Us</Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About