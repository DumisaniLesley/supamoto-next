import React from 'react'
import { FaAddressCard, FaPhone, FaMobile, FaPaperPlane } from 'react-icons/fa'
const Contact = () => {
  return (
    <section className="bg-white">
        <div className="container max-w-6xl px-6 py-12 mx-auto pt-40">
            <div>
                <h2 className="font-bold text-3xl md:text-5xl">Get In Touch</h2>
                <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Chat to our friendly team</h1>
                <p className="mt-3 text-gray-500 ">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 place-content-center">
                    <div>
                        <div className="mt-4 text-base font-medium text-gray-800 flex items-center ">
                            <FaAddressCard size={35}/>
                            <span>9160 Lunsemfwa road, Kalundu, Lusaka.</span>
                        </div>
                        <div className="mt-4 text-base font-medium text-gray-800 flex items-center">
                            <FaPhone size={35}/>
                            <span>+260 211 295 117</span>
                        </div>
                        <div className="mt-4 text-base font-medium text-gray-800 flex items-center">
                            <FaMobile size={35}/>
                            <span>2233(MTN & Airtel)</span>
                        </div>
                        <div className="mt-4 text-base font-medium text-gray-800 flex items-center">
                           <FaPaperPlane size={35}/>
                            <span>info@supamoto.co.zm</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 py-6 rounded-lg shadow-xl md:p-8">
                    <form>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 ">First Name</label>
                                <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 ">Last Name</label>
                                <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                            <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact