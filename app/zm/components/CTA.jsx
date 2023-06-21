import Link from 'next/link'

const CTA = () => {
  return (
    <section className="bg-white my-20">
        <div className="container max-w-6xl flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
                Bring your Business to the <span className="text-orange-600">next level.</span>
            </h2>

            <p className="max-w-4xl mt-6 text-center text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
                <Link href="/zm/contact" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-orange-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Get In Touch
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTA