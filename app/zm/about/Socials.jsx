import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Socials = () => {
  return (
    <section className='bg-white'>
    <div className='container max-w-6xl px-6 md:px-12 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Lets <span className='text-orange-600 uppercase'>Connect.</span></h1>

        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <Link href="" className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                    <FaFacebook className='text-blue-500' size={32} />
                </Link>
            </div>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <Link href="" className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                <FaLinkedin className='text-blue-500' size={32} />
                </Link>
            </div>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <Link href="" className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                <FaTwitter className='text-blue-500' size={32} />
                </Link>
            </div>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <Link href="" className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                <FaInstagram className='text-blue-500' size={32} />
                </Link>
            </div>
            <div className='flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl'>
                <Link href="" className='inline-block p-3 text-blue-500 bg-blue-100 rounded-full '>
                <FaYoutube className='text-red-600' size={32} />
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Socials