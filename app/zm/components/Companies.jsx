import Image from 'next/image'
import data from '../data/companies.json'

const Companies = () => {
  return (
    <div className='max-w-6xl px-6 mx-auto mt-20'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6'>
            {data.companies.map((company)=>(
            <div key={company.id} className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 bg-gray-100 py-5 rounded-lg shadow-xl cursor-pointer'>
                <Image src={company.image} alt='brand1' width={150} height={50} />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Companies