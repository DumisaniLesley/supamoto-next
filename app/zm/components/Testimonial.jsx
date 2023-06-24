"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import data from '../data/testimonials.json';

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-6xl px-6 py-10 mx-auto mt-20">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          autoplay={{ delay: 10 }}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                    <div className="flex items-center justify-center">
                        <Image
                        src={item.image}
                        alt="Testimonial 1"
                        width={500}
                        height={500}
                        className="object-contain rounded-xl object-center lg:w-1/2 lg:mx-6 w-60 h-60 lg:h-[28rem]"
                        />
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-center sm:text-left text-gray-800 lg:text-3xl lg:w-96">
                        What Our Clients Say About Supamoto
                        </h1>
                        <p className="max-w-lg mt-6 text-gray-500">
                        {item.text}
                        </p>
                        <h3 className="mt-6 text-lg font-medium text-blue-500">{item.name}</h3>
                        <p className="text-gray-600">{item.position}</p>
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