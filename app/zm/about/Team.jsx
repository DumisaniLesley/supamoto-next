import data from '../data/team.json'
import Image from 'next/image'

const Team = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Meet Our <span className='text-orange-600 uppercase'>Executive Team.</span></h1>

        <p className='max-w-3xl mx-auto my-6 text-center text-gray-500'>
        At Supamoto, we take pride in being at the forefront of innovation and excellence in the automotive industry. Our success is driven by a team of visionary leaders, each with a passion for revolutionizing the way people experience motorcycling. Meet the brilliant minds behind Supamotos continued growth and success, dedicated to creating exceptional products and delivering unmatched customer satisfaction.
        </p>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4'>
            {data.map((member)=>(
            <div key={member.id} className='flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-600'>
                <Image src={member.image} width={200} height={200} alt={member.name} className='object-cover w-32 h-32 rounded-full ring-4 ring-blue-500'/>
                <h1 className='mt-2 text-lg text-center font-bold text-gray-700 capitalize group-hover:text-white'>{member.name}</h1>
                <p className=' text-sm text-gray-500 capitalize group-hover:text-gray-300'>{member.position}</p>
            </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Team