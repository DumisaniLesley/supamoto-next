import Link from 'next/link';
import React from 'react';
import heroImage from '@/public/thinking.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='container max-w-6xl px-6 md:px-12 py-16 mx-auto'>
      <div className='items-center lg:flex mt-24 md:mt-40'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-center md:text-left text-3xl sm:text-6xl font-bold text-gray-800 lg:text-4xl'>
              About <span className='text-orange-500 '>SupaMoto</span>
            </h1>

            <p className='mt-3 text-center md:text-left text-gray-600 mb-2'>
              We offer Clean Cooking, with a 100% Zambia sustainable fuel
              branded SupaMoto, and Stoves specifically designed for both
              Households and Businesses, as well as Solar products for
              Households, Small Businesses and Productive Use.
            </p>
            <p className='mt-3 text-center md:text-left text-gray-600 mb-2'>
              At SupaMoto, we understand the importance of reducing our carbon
              footprint and utilizing renewable resources. Thats why we have
              dedicated ourselves to manufacturing and supplying high-quality
              pellet stoves that run on pellets derived from bio-waste
              materials. Our commitment to sustainability is at the core of
              everything we do.
            </p>
            <p className='mt-3 text-center md:text-left text-gray-600 mb-2'>
              Our pellet stoves are designed with innovation and efficiency in
              mind. They utilize advanced combustion technology to extract
              maximum heat from the locally produced bio-waste pellets, ensuring
              optimal performance and minimal waste. With precise temperature
              control and reliable ignition systems, our stoves provide a
              hassle-free cooking experience for institutions and organizations
              of all sizes.
            </p>
          </div>
        </div>
            <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                <Image src={heroImage} width={700} height={400} alt='Logo' />
            </div>
      </div>
    </div>
  );
};

export default Hero;
