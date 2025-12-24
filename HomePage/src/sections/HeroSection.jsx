import React from "react";
import logo from "../assets/logo.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import leftIcons from "../assets/leftIcons.svg";
import rightIcons from "../assets/rightIcons.svg";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full flex flex-col items-center text-center text-white pt-24 pb-20 overflow-hidden">
        <img
          src={leftIcons}
          alt="Left icons"
          className="absolute left-6 top-1/2 -translate-y-1/2 translate-x-36 w-105 h-105 hidden lg:block"
        />

        <img
          src={rightIcons}
          alt="Right icons"
          className="absolute right-6 top-1/2 -translate-y-1/2 -translate-x-36 w-105 h-105 hidden lg:block"
        />

        {/* Center Logo in black */}
        <div className="mb-8 relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center shadow-lg">
            <img
              src={logo}
              alt="Setapp Logo"
              className="w-15 h-15 object-contain"
            />
          </div>
        </div>

        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Dozens of apps.
          <br />
          One subscription.
        </h1>

        <p className="relative z-10 mt-4 text-4xl md:text-5xl font-semibold">
          $9.99
        </p>

        <div className="relative z-10 mt-8 flex items-center gap-4">
          <button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition">
            Try free for 7 days
          </button>

          <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
            <img src={apple} alt="Apple" className="w-5 h-5 object-contain" />
          </button>

          <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
            <img src={google} alt="Google" className="w-5 h-5 object-contain" />
          </button>
        </div>

        <p className="relative z-10 mt-6 text-sm text-gray-400 max-w-md">
          Power up your workflow with Setapp, a
          <br />
          smart way to get apps.
        </p>
      </section>

      <section className="w-full flex flex-col items-center text-left text-white px-6 lg:px-0 py-16">
        <hr className="w-3/4 border-t border-gray-600 mb-12" />

        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              What you get on Setapp.
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="text-base md:text-lg text-gray-300">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
