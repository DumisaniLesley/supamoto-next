'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import data from '../data/testimonials.json';

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
  return (
    <section className='bg-white'>
      <div className='container max-w-6xl px-6 py-1 mx-auto mt-20'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 lg:text-3xl'>
            What Our Clients Say About <br /> <span className='text-orange-600 mt-2 uppercase'>Supamoto</span> 
        </h1>
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10 }}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='lg:-mx-6 lg:flex lg:items-center'>
                        <div className='flex items-center justify-center'>
                            <Image
                            src={item.image}
                            alt='Testimonial 1'
                            width={700}
                            height={700}
                            className='object-contain rounded-full sm:rounded-xl object-center lg:w-1/2 lg:mx-6 w-40 h-40 lg:h-[32rem]'
                            />
                        </div>

                        <div className='mt-2 lg:w-full lg:px-6 lg:mt-0'>
                            <p className='max-w-lg mt-6 text-gray-500'>
                            {`'${item.text}'`}
                            </p>
                            <h3 className='mt-6 text-lg font-medium text-blue-500'>{item.name}</h3>
                            <p className='text-gray-600 mb-16 sm:mb-1'>{item.position}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;