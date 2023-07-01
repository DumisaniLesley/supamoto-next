import Image from 'next/image';
import React from 'react';
import StovesImg from '@/public/products/stoves.png';
import mimi from '@/public/products/mimi.png';
import gas from '@/public/products/gas.png';
import institutional from '@/public/products/institutional.png';

const Stoves = () => {
  return (
    <section className='bg-white pt-20'>
    <div className='container max-w-6xl px-6 md:px-12 py-2 mx-auto'>
        <div className='items-center lg:flex mt-2 md:mt-4'>
            <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                <Image src={StovesImg} width={800} height={400} alt='Logo' />
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='lg:max-w-lg'>
                    <h1 className='text-center md:text-left text-2xl sm:text-4xl font-semibold text-gray-800 lg:text-3xl'>Supamoto <span className='text-orange-600 uppercase'>Stoves</span></h1>
                    <p className='mt-2 text-center md:text-left text-gray-600 mb-2'>SupaMoto stove is an advanced cooking appliance specifically designed to maximize the performance of SupaMoto pellets. It is a clean and efficient cooking solution that provides reliable warmth for homes, businesses, and institutions.</p>
                    <p className='mt-2 text-center md:text-left font-bold text-gray-900 mb-2'>We have 3 types of Stoves, the Mimimoto, the gasifier and the institutional stove.</p>
                </div>
            </div>
        </div>
        <div className='px-6 grid grid-cols-2 gap-2 sm:gap-8 mt-2 xl:mt-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 justify-center items-center'>
          <div className='p-5'>
            <Image src={mimi} width={100} height={100} alt='Logo' />
            <h1 className='text-center text-sm font-semibold text-gray-700 capitalize'>
             MimiMoto Stove
            </h1>
          </div>
          <div className='p-5'>
            <Image src={gas} width={200} height={100} alt='Logo' />
            <h1 className='text-center text-sm font-semibold text-gray-700 capitalize'>
            SupaMoto Stove
            </h1>
          </div>
          <div className='p-5'>
            <Image src={institutional} width={200} height={100} alt='Logo' />
            <h1 className='text-center text-sm font-semibold text-gray-700 capitalize'>
              Institutional Stove
            </h1>
          </div>
        </div>
    </div>
</section>
  );
};

export default Stoves;
