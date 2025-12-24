import React from "react";
import logo from "../assets/logo.svg";
import en from "../assets/en.svg";

import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 px-6 lg:px-12">
      <div className="w-full h-px bg-white/20 mb-0" />

      <div className="max-w-6xl mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16">
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Setapp" className="h-8 w-fit" />

            <p className="text-sm">
              Updates from our team, written with love{" "}
              <span className="text-orange-400">🧡</span>
            </p>
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#3A3F45] text-sm text-white px-4 py-3 rounded-md outline-none pr-12"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center bg-white rounded-md text-black font-bold">
                →
              </button>
            </div>
          </div>

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
        <div className="flex justify-end py-3">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white text-xs text-gray-300">
            <img src={en} alt="English" className="h-4" />
            <span>English</span>
            <span className="text-[10px] mt-[1px]">▼</span>
          </div>
        </div>
        <div className="w-full h-px bg-white/10" />
        <div className="relative py-6 text-xs text-gray-400">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex flex-col gap-2 text-center lg:text-left max-w-3xl">
              <p>
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <span className="hover:text-white cursor-pointer">
                  Terms of Use
                </span>
                <span className="hover:text-white cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex gap-4">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-4 cursor-pointer"
                />
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-4 cursor-pointer"
                />
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-4 cursor-pointer"
                />
                <img
                  src={youtube}
                  alt="YouTube"
                  className="w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
