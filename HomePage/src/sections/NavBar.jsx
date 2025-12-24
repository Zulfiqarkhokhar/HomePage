import React from "react";
import logo from "../assets/logo.svg";
import en from "../assets/en.svg";

const NavBar = () => {
  return (
    <nav className="w-full px-6 lg:px-12 py-4 flex items-center justify-between text-white">
      {/* log */}
      <div className="flex items-center shrink-0 cursor-pointer">
        <img src={logo} alt="Logo" className="h-6 w-auto object-contain" />
      </div>

      {/* nav links */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer">How it works</li>
          <li className="hover:text-white cursor-pointer">All apps</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">For Teams</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Podcast</li>
        </ul>

        {/* divider */}
        <span className="hidden md:block w-0.5 h-4 bg-white/50" />

        {/* flag logo */}
        <img
          src={en}
          alt="English"
          className="hidden sm:block h-4 w-auto object-contain cursor-pointer"
        />

        <span className="hidden sm:inline hover:text-white cursor-pointer text-sm font-medium">
          Sign In
        </span>

        {/* try buton */}
        <button className="px-6 py-1 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition cursor-pointer">
          Try free
        </button>

        <button className="md:hidden flex flex-col gap-1 ml-1">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
