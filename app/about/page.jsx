import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="w-full bg-center bg-fit h-screen" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center w-full h-screen">
            <div className="text-left mt-20 sm:mt-20">
                <h1 className="text-3xl font-semibold text-white lg:text-6xl ">ABOUT <br /> <span className="text-orange-600 mb-20">SUPAMOTO</span></h1>
                <p className='mb-10 w-full sm:max-w-6xl sm:mx-0 font-normal text-md sm:text-lg text-white leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae, ab, nulla pariatur eum ipsum alias laborum, non corporis tempore qui vitae accusamus provident voluptatum autem dolorem fuga quas fugiat odio sunt ullam? Nulla modi atque suscipit consequatur quisquam porro, ex dolores, assumenda, iste quasi et animi asperiores placeat tenetur? Beatae temporibus suscipit sed nemo ducimus officia nobis in, at quaerat repudiandae nihil doloribus nostrum non iure ex consectetur praesentium obcaecati sunt. Doloribus neque autem a ratione consequuntur assumenda architecto, non voluptatibus, eos ex praesentium expedita dolore dolores earum, ipsa corrupti temporibus voluptatem aperiam dolorum? Officia illum rerum provident consectetur.</p>
                {/* <p className='mb-10 max-w-6xl mx-6 sm:mx-0 font-normal text-lg text-white leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae, ab, nulla pariatur eum ipsum alias laborum, non corporis tempore qui vitae accusamus provident voluptatum autem dolorem fuga quas fugiat odio sunt ullam? Nulla modi atque suscipit consequatur quisquam porro, ex dolores, assumenda, iste quasi et animi asperiores placeat tenetur? Beatae temporibus suscipit sed nemo ducimus officia nobis in, at quaerat repudiandae nihil doloribus nostrum non iure ex consectetur praesentium obcaecati sunt. Doloribus neque autem a ratione consequuntur assumenda architecto, non voluptatibus, eos ex praesentium expedita dolore dolores earum, ipsa corrupti temporibus voluptatem aperiam dolorum? Officia illum rerum provident consectetur.</p> */}
                  <Link href='/contact' class="mt-20 text-center w-full px-5 py-4 text-md font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-blue-500">Get In Touch</Link>
            </div>
        </div>
    </div>
  )
}

export default About