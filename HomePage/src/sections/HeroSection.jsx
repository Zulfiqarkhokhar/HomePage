import React from "react";
import logo from "../assets/logo.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import leftIcons from "../assets/leftIcons.svg";
import rightIcons from "../assets/rightIcons.svg";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center text-center text-white pt-24 pb-20 overflow-hidden min-h-screen">
        {/* Left Icons - Fixed positioning */}
        <div className="absolute left-40 top-1/2 -translate-y-1/2 w-auto h-auto max-w-[30vw] z-0 hidden lg:block">
          <img
            src={leftIcons}
            alt="Left icons"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Right Icons - Fixed positioning */}
        <div className="absolute right-30 top-1/2 -translate-y-1/2 w-auto h-auto max-w-[30vw] z-0 hidden lg:block">
          <img
            src={rightIcons}
            alt="Right icons"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 w-full max-w-6xl px-6 lg:px-0">
          {/* Center Logo in black */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center shadow-lg">
              <img
                src={logo}
                alt="Setapp Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Dozens of apps.
            <br />
            One subscription.
          </h1>

          {/* Price */}
          <p className="text-4xl md:text-5xl font-semibold mb-8">$9.99</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition w-full sm:w-auto">
              Try free for 7 days
            </button>

            <div className="flex gap-2">
              <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
                <img
                  src={apple}
                  alt="Apple"
                  className="w-5 h-5 object-contain"
                />
              </button>

              <button className="w-11 h-11 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition">
                <img
                  src={google}
                  alt="Google"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Power up your workflow with Setapp, a
            <br />
            smart way to get apps.
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <hr className="w-full border-t border-gray-700 mb-12" />

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                What you get on Setapp.
              </h2>
            </div>

            <div className="lg:w-1/2">
              <p className="text-base md:text-lg text-gray-300">
                With a single monthly subscription at $9.99, you get 240+ apps
                for your Mac.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
