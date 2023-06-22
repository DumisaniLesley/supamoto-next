import Link from 'next/link'
import React from 'react'

const locations = [
    {
        id: 1,
        name: 'Zambia',
        email: 'info@supamoto.co.zm',
        address: "9160 Lunsemfwa road, Kalundu, Lusaka.",
        phone: "+260 211 295 117",
        website: "/zm"
    },
    {
        id: 2,
        name: 'Malawi',
        email: 'info.mw@supamoto.global',
        address: "Nkuyu road, Plot #169, Area 47, Sector-5 Lilongwe.",
        phone: "+265 983 030 607",
        website: "/mw"
    },
    {
        id: 3,
        name: 'Mozambique',
        email: 'info.mz@supamoto.global',
        address: "Maputo, Av. De Moçambique , bairro do Benfica.",
        phone: "+258 865 680 999",
        website: "/mz"
    }
]


const Contact = () => {
  return (
    <section className="bg-white -z-50">
    <div className="container max-w-6xl px-6 py-12 mx-auto pt-40">
        <div className='text-center'>
            <h1 className="mt-2 text-3xl font-semibold md:text-6xl uppercase">Get in <span className="text-orange-600">touch</span></h1>
            <p className="-mt-2 text-gray-500">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-20 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                    {locations.map((location) => (
                        <div key={location.id} className='mb-5'>
                            <div className="font-semibold text-md uppercase text-orange-600">{location.name}</div>
                            <p className="mt-2 text-base font-bold">Address: <span className='font-semibold'>{location.address}</span></p>
                            <p className="mt-2 text-base">Phone: <span>{location.phone}</span></p>
                            <p className="mt-2 text-base text-blue-500 ">Email : <span>{location.email}</span></p>
                            <Link href={location.website} className="flex items-center mt-2 -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform hover:text-blue-600">
                                <span className="mx-1">Website</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                            <hr className='border-black border-1 my-4'/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="100%" frameborder="0" title="SupaMoto Locations" marginheight="0" marginwidth="0"  src="https://www.google.com/maps/d/u/0/embed?mid=1knPMIckiMUR7DlPnBx3rsvNh0sr-xA0O&ehbc=2E312F"></iframe>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact