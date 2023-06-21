import React from 'react'

const Socials = () => {
  return (
    <section className="bg-white">
    <div className="container max-w-6xl px-6 md:px-12 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Lets <span className="text-orange-600 uppercase">Connect.</span></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    Facebook
                </span>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    Linkedin
                </span>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    Twitter
                </span>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    Instagram
                </span>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
                    YouTube
                </span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Socials