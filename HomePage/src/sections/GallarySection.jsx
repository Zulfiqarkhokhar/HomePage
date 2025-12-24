import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import leftArrow from "../assets/leftArrow.svg";

const GallarySection = () => {
  return (
    <section className="w-full px-6 lg:px-0 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden mb-6">
          <img
            src={img1}
            alt="Gallery Top"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={img2}
              alt="Gallery Left"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src={img3}
              alt="Gallery Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-16 mb-14 cursor-pointer hover:text-gray-300 transition">
          <img src={leftArrow} alt="left arrow" className="object-cover" />
          <span className="text-white text-base md:text-lg">
            View all superpowers
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-20">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Your Setapp journey.
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Type in your task into Setapp search and get instant app
              recommendations that help you work faster and smarter.
            </p>
          </div>
        </div>
        <hr className="w-full border-t border-gray-600 mt-8" />
      </div>
    </section>
  );
};

export default GallarySection;
