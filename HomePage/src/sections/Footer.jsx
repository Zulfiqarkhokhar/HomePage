import React from "react";
import logo from "../assets/logo.svg";
import en from "../assets/en.svg";

import facebook from "../assets/facebookLight.svg";
import twitter from "../assets/twitterLight.svg";
import instagram from "../assets/instagramLight.svg";
import youtube from "../assets/youtubeLight.svg";
import rightArrow from "../assets/rightArrow.svg";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 bg-[#26262B]">
      {/* Top separator line */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-px bg-white/20" />

      {/* Main footer content - Wider container */}
      <div className="max-w-screen-2xl mx-auto pt-20 px-6 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 pb-16">
          {/* Logo and newsletter section */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Setapp" className="h-15 w-fit" />

            <p className="text-sm">
              Updates from our team, written with love{" "}
              <span className="text-orange-400">🧡</span>
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#3A3F45] text-sm text-white px-4 py-3 rounded-md outline-none pr-12"
              />
              <button className="absolute right-0 top-0 bottom-0 w-14 flex items-center justify-center bg-white text-black font-bold cursor-pointer rounded-r-md">
                <img src={rightArrow} alt="arrow" className="w-2" />
              </button>
            </div>
          </div>

          {/* Column 1 */}
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">All Apps</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">
              Setapp for Teams
            </li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Podcast</li>
            <li className="hover:text-white cursor-pointer">Download</li>
          </ul>

          {/* Column 2 */}
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">
              Education Discount
            </li>
            <li className="hover:text-white cursor-pointer">Family Plan</li>
            <li className="hover:text-white cursor-pointer">For Developers</li>
            <li className="hover:text-white cursor-pointer">Gift Cards</li>
            <li className="hover:text-white cursor-pointer">
              Redeem Card or Code
            </li>
            <li className="hover:text-white cursor-pointer">Setapp Reviews</li>
            <li className="hover:text-white cursor-pointer">
              Affiliate Program
            </li>
            <li className="hover:text-white cursor-pointer">
              Mac Developer Survey 2023
            </li>
          </ul>

          {/* Column 3 */}
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Getting started with Setapp
            </li>
            <li className="hover:text-white cursor-pointer">
              Remote access to other Mac
            </li>
            <li className="hover:text-white cursor-pointer">
              Fix macOS Ventura problems
            </li>
            <li className="hover:text-white cursor-pointer">
              Best productivity apps
            </li>
            <li className="hover:text-white cursor-pointer">
              Best YouTube downloaders
            </li>
            <li className="hover:text-white cursor-pointer">Uninstall apps</li>
          </ul>
        </div>

        {/* Language selector */}
        <div className="flex justify-end py-3">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white text-xs text-gray-300">
            <img src={en} alt="English" className="h-4" />
            <span>English</span>
            <span className="text-[10px] mt-[1px]">▼</span>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom section */}
        <div className="py-8 text-xs text-gray-400">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left side - Copyright and links */}
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-3xl">
              <p>
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-6 justify-center lg:justify-start">
                <span className="hover:text-white cursor-pointer">
                  Terms of Use
                </span>
                <span className="hover:text-white cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>

            {/* Right side - Social media */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex gap-6">
                <a
                  href="https://facebook.com/setapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Setapp Facebook"
                >
                  <img
                    src={facebook}
                    alt=""
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://x.com/setapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Setapp X (formerly Twitter)"
                >
                  <img
                    src={twitter}
                    alt=""
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://instagram.com/setapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Setapp Instagram"
                >
                  <img
                    src={instagram}
                    alt=""
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://youtube.com/setapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Setapp YouTube"
                >
                  <img
                    src={youtube}
                    alt=""
                    className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
