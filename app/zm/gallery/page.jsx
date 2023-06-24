import Testimonial from '@/public/testimonial.jpg';
import Image from 'next/image';

import data from '../data/gallery.json';

const Gallery = () => {
  return (
    <section class="bg-white">
    <div class="container max-w-6xl px-6 py-10 mx-auto pt-40">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl">Some <span className='text-orange-600 uppercase'> Memories</span></h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => (
            <div key={item.id} class="flex flex-col items-center">
                <Image width={500} height={500} class="object-contain w-full rounded-lg aspect-square hover:scale-105 transition-all ease-in delay-100" src={item.image} alt={item.id}/>
            </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Gallery