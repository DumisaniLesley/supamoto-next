import Link from 'next/link'
import data from './blogs.json'
import Image from 'next/image'

const Blogs = () => {
  return (
    <section className="bg-white">
    <div className="container max-w-6xl px-6 py-10 mx-auto pt-40">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 uppercase lg:text-6xl">From the <span className='text-orange-500'>blog</span></h1>

            <p className="max-w-lg mx-auto text-gray-500 -mt-2">
                Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
                pie.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {data.blogs.map((blog)=>(
                <div key={blog.id} className='mb-4'>
                    <div className="">
                        <Image src={blog.image} width={400} height={300} alt={blog.title} className="object-fit object-center w-full h-40 rounded-lg lg:h-44"/>
                    </div>
                    <h1 className="mt-6 text-lg font-semibold text-orange-600">
                        {blog.title}
                    </h1>
                    <p className="text-sm font-medium">
                        {blog.description}
                    </p>
                    <Link href={`/zm/blogs/${blog.id}`} className="mt-4 flex items-center -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform hover:text-blue-600">
                        <span className="mx-1">read more</span>
                        <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Blogs