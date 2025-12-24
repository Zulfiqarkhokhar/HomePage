import React from "react";
import logo from "../assets/logo.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center text-center text-white pt-24 pb-20">
      {/* Center Logo in black */}
      <div className="mb-8">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center shadow-lg">
          <img
            src={logo}
            alt="Setapp Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Dozens of apps.
        <br />
        One subscription.
      </h1>

      <p className="mt-4 text-4xl md:text-5xl font-semibold">$9.99</p>

      <div className="mt-8 flex items-center gap-4">
        <button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition">
          Try free for 7 days
        </button>

        {/* aple logo */}
        <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
          <img src={apple} alt="Apple" className="w-5 h-5 object-contain" />
        </button>

        {/* google logo */}
        <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
          <img src={google} alt="Google" className="w-5 h-5 object-contain" />
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-400 max-w-md">
        Power up your workflow with Setapp, a
        <br />
        smart way to get apps.
      </p>
    </section>
  );
};

export default HeroSection;
