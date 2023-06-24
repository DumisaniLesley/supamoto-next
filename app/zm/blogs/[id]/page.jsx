"use client"

import { usePathname } from 'next/navigation'
import blogsData from '../blogs.json';
import Link from 'next/link';
import Image from 'next/image';

import Supamoto from '@/public/supamoto.png';

const Blog = () => {
  const pathname = usePathname()
  const id = pathname.substring(pathname.lastIndexOf('/')+1);
  const blog = blogsData.find((blog) => blog.id === id);
  const blogs = blogsData.filter((blog) => blog.id !== id).slice(0, 3);

return (
  <main className="bg-white">
    <div className="flex justify-between container max-w-6xl px-6 py-10 mx-auto pt-40">
        <article className="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{blog.title}</h1>
                <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <Image src={Supamoto} width={100} height={100} alt="Jese Leos" className="object-contain mr-4 w-20 h-20 rounded-full" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900">SupaMoto Admin</a>
                            <p className="text-base font-light text-gray-500"><time pubdate datetime="2022-02-08" title="February 8th, 2022">{blog.date}</time></p>
                        </div>
                    </div>
                </address>
            </header>
            <figure className='w-full'>
              <Image src={blog.image} width={640} height={360} alt={blog.title} className='w-full rounded-xl'/>
              <figcaption><small>Digital art by Anonymous</small></figcaption>
            </figure>
            <p className="lead mt-4 font-semibold">{blog.description}</p>
            <p className='mt-2'>{blog.content_1}</p>
            <p className='mt-2'>{blog.content_2}</p>
            <p className='mt-2'>{blog.content_3}</p>

            <Link 
              href={blog.url} 
              target='_blank' 
              className="mt-4 flex items-center -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform">
              <span className="mx-1">Full Story </span>
              <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </article>
    </div>
    <div className="bg-white">
          <div className="container max-w-6xl px-6 py-10 mx-auto">
              <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">recent posts </h1>
              </div>
              <hr className="my-8 border-gray-200"/>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog) => (
                  <div key={blog.id}>
                    <Image src={blog.image} width={640} height={360} alt={blog.title} className='object-cover object-center w-full h-54 rounded-lg lg:h-62'/>
                      <div className="mt-8">
                          <h1 className="mt-4 text-xl font-semibold text-gray-800">
                            {blog.title.split(' ').slice(0, 4).join(' ')}{blog.title.split(' ').length > 4 ? '...' : ''}
                          </h1>
                          <p className="mt-2 text-gray-500">
                            {blog.description.split(' ').slice(0, 23).join(' ')}{blog.description.split(' ').length > 23 ? '...' : ''}
                          </p>
                          <div className="flex items-center justify-between mt-4">
                              <div>
                                  <a href="#" className="text-md font-bold text-gray-700 hover:underline hover:text-gray-500">
                                      Supamoto Admin
                                  </a>
                                  <p className="text-sm text-gray-500">{blog.date}</p>
                              </div>
                              <Link href={`/zm/blogs/${blog.id}`}className="inline-block text-orange-600 hover:text-blue-400">Read more</Link>
                          </div>
                      </div>
                  </div>
                ))}
              </div>
          </div>
          <div className='text-center'>
          <Link href="/zm/blogs" className="font-bold text-xl text-orange-600 tracking-wider">All Blogs</Link>
          </div>
      </div>
  </main>
  );
};

export default Blog;