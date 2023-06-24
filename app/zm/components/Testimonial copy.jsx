"use client"

import Image from 'next/image'
import React from 'react'

import TestimonialImg from '@/public/testimonial.jpg'
  

const Testimonial = () => {
  return (
    <section className="bg-white">
        <div className="container max-w-6xl px-6 py-10 mx-auto mt-40">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className='flex items-center justify-center'>
                <Image src={TestimonialImg} alt="Testimonial" width={500} height={500} className='object-contain object-center lg:w-1/2 lg:mx-6 w-60 h-60 rounded-lg lg:h-[28rem]' />
            </div>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 className="text-2xl font-semibold text-center sm:text-left text-gray-800 lg:text-3xl lg:w-96">
                    What Our Clients Say About Supamoto
                </h1>
                <p className="max-w-lg mt-6 text-gray-500">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>
                <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                <p className="text-gray-600">Marketing Manager at Stech</p>
                <div className="flex items-center justify-between mt-12 mx-20 sm:mx-0 lg:justify-start">
                    <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  lg:mx-6 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Testimonial