import React from "react";
import logo from "../assets/logo.svg";

const PriceSection = () => {
  return (
    <section className="w-full relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#26262B]"></div>

      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col items-start text-left">
              <div className="mb-12">
                <img src={logo} alt="Setapp Logo" className="h-16" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 max-w-3xl">
                Superpowers starting $9.99/month.
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-black mb-6 max-w-3xl">
                Free for 7 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-fit">
                  Get started now
                </button>

                <button className="px-10 py-4 border-2 border-gray-800 text-black text-lg font-semibold rounded-md hover:bg-gray-50 transition-all duration-300 w-fit">
                  More about Setapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
