import React from "react";
import Pellets from "@/public/products/pellets.png";
import Image from "next/image";
import pellets5kg from "@/public/products/5kgs.png";
import pellets20kg from "@/public/products/20kgs.png";
import pellets30kg from "@/public/products/30kgs.png";
import pellets50kg from "@/public/products/50kgs.png";

const Products = () => {
  return (
    <section className="bg-white pt-40">
      <div className="container max-w-6xl px-6 md:px-12 py-2 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl">
          explore our <br />{" "}
          <span className="text-orange-600 uppercase">Awesome Products.</span>
        </h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
        </div>
        <div className="items-center lg:flex mt-2 md:mt-4">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-center md:text-left text-2xl sm:text-4xl font-semibold text-gray-800 lg:text-3xl">
                Supamoto{" "}
                <span className="text-orange-600 uppercase">Pellets</span>
              </h1>

              <p className="mt-2 text-center md:text-left text-gray-600 mb-2">
                SupaMoto pellets are a sustainable fuel source produced by
                SupaMoto. They are made from locally sourced bio-waste,
                including agricultural residues and wood waste. These pellets
                are specifically crafted to provide an eco-friendly and
                renewable energy solution for homes, businesses, and
                institutions. SupaMoto pellets are designed to be compatible
                with most pellet stoves available on the market. They have been
                carefully formulated to meet the specifications required for
                efficient and reliable combustion.
              </p>
              <p className="mt-2 text-center md:text-left font-bold text-gray-900 mb-2">
                The SupaMoto Pellets are available in various sizes including
                5Kgs, 20Kgs, 30Kg and 50Kgs
              </p>
              <div className="flex justify-center items-center md:justify-start"></div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image src={Pellets} width={800} height={400} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="container max-w-6xl px-6 md:px-12 py-2 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-4 justify-center items-center">
          <div className="p-5">
            <Image src={pellets5kg} width={100} height={50} alt="Logo" />
            <h1 className="text-sm font-semibold text-gray-700 capitalize my-2">
              5Kg Pellet Bag
            </h1>
          </div>
          <div className="p-5">
            <Image src={pellets20kg} width={100} height={50} alt="Logo" />
            <h1 className="text-sm font-semibold text-gray-700 capitalize my-2">
            20Kg Pellet Bag
            </h1>
          </div>
          <div className="p-5">
            <Image src={pellets30kg} width={100} height={50} alt="Logo" />
            <h1 className="text-sm font-semibold text-gray-700 capitalize my-2">
            30Kg Pellet Bag
            </h1>
          </div>
          <div className="p-5">
            <Image src={pellets50kg} width={100} height={50} alt="Logo" />
            <h1 className="text-sm font-semibold text-gray-700 capitalize my-2">
            50Kg Pellet Bag
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
