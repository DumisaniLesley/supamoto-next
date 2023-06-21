import Link from 'next/link'
import Logo from '@/public/supamoto.png'
import Image from 'next/image'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/zm',
    },
    {
        id: 2,
        title: 'Who We Are',
        url: '/zm/about',
    },
    {
        id: 3,
        title: 'What We Do',
        url: '/zm/services',
    },
    {
        id: 4,
        title: 'Gallery',
        url: '/zm/gallery',
    },
    {
        id: 5,
        title: 'Blog',
        url: '/zm/blogs',
    },
    {
        id: 6,
        title: 'Contact',
        url: '/zm/contact',
    }
]

const Navbar = () => {
  return (
    <nav  className="fixed w-full bg-white shadow-xl z-50">
    <div className="container max-w-6xl px-2 py-5 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
            <a href="/">
                <Image width={100} height={24} src={Logo} alt=""/>
            </a>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div class="flex flex-col md:flex-row md:mx-6">
                {links.map((link) => (
                    <Link href={link.url} key={link.id} className="my-2 text-md font-semibold transition-colors duration-300 transform  hover:text-orange-600 md:mx-4 md:my-0">{link.title}</Link>
                    ))}
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar