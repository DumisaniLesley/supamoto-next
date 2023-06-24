"use client"
import Link from 'next/link'
import { useRouter  } from 'next/navigation';
import data from './../blogs.json'

const BlogPost = () => {

  const id = useRouter.query
  console.log(id)

  return (
<main className="bg-white">
  <div className="flex justify-between container max-w-6xl px-6 py-10 mx-auto pt-40">
      <article className="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">Best practices for successful prototypes</h1>
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900">Jese Leos</a>
                          <p className="text-base font-light text-gray-500">Graphic Designer</p>
                          <p className="text-base font-light text-gray-500"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
          </header>
          <figure className='w-full'>
            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="Blog Image" className='w-full'/>
            <figcaption><small>Digital art by Anonymous</small></figcaption>
          </figure>
          <p className="lead mt-4 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facilis numquam veritatis veniam a quos vero porro in, ipsa voluptatibus accusantium. Officiis at ea id enim vel, ipsam expedita, magni animi aliquam aspernatur eius impedit nemo, illo perspiciatis quod deleniti sint nisi mollitia soluta a commodi odio! Saepe, et aut.</p>
          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere odio perferendis rem porro, quaerat, deserunt tempore, repudiandae amet doloremque doloribus consequuntur architecto. Beatae velit commodi ipsa veritatis, eveniet minima quo. Laborum doloremque vitae nulla laudantium, accusantium reiciendis cupiditate voluptatibus repellendus deleniti in dolor quas unde sed veniam quasi ipsum minima, minus et dolorem ipsam! Atque facilis ex, nihil quis fuga odit quidem reiciendis porro vero aut nesciunt enim nobis doloribus alias perspiciatis. Cumque veniam obcaecati amet ipsam explicabo harum? Dolorum sint quae ab facere fugit obcaecati ut error, impedit veritatis officiis voluptatum quos voluptatem amet atque eos dolore incidunt commodi necessitatibus repellat voluptates. Quaerat autem ut incidunt vitae aliquam velit facere provident, expedita laboriosam iste fugit a nisi vero, voluptatum id est praesentium animi illum. Vero sapiente cumque veritatis quia dolore id ea ratione mollitia illum praesentium facere reprehenderit nulla ducimus veniam, sit quo porro, recusandae ullam autem beatae vel quae necessitatibus nam? Natus molestias culpa sint, vel reiciendis illum suscipit possimus? Similique quasi quos nostrum, sunt facere natus nisi laborum recusandae aliquid, unde iste accusantium laboriosam! Ipsum commodi accusamus voluptate velit, eveniet numquam. Ex, et, ratione quasi laudantium tenetur dolores quibusdam corrupti aut reiciendis aspernatur sit soluta doloribus!</p>

          <Link href="/" className="mt-4 flex items-center -mx-1 text-md font-semibold text-orange-600  capitalize transition-colors duration-300 transform">
            <span className="mx-1">Full Story </span>
            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
      </article>
  </div>
</main>
  )
}

export default BlogPost