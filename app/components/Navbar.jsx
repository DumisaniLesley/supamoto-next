"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/supamoto.png';
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
    },
    {
      id: 3,
      title: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <nav className="fixed w-full bg-transparent shadow-xl z-50">
      <div className="container max-w-6xl px-2 py-5 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image width={100} height={24} src={Logo} alt="" />
          </Link>
          <button
            type="button"
            className="block md:hidden"
            onClick={toggleNavbar}
          >
            <BiMenuAltRight className="w-12 h-12 fill-current text-gray-900" />
          </button>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {links.map((link) => (
              <Link href={link.url} key={link.id} className="my-2 text-lg font-semibold text-orange-600 transition-colors duration-300 transform  hover:text-blue-600 md:mx-4 md:my-0">{link.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;