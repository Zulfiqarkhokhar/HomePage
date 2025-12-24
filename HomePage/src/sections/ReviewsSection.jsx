import React, { useState } from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const reviews = [
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    icon: twitter,
    bg: "bg-[#6B6C9A]",
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    icon: instagram,
    bg: "bg-[#D8B08C]",
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    icon: facebook,
    bg: "bg-[#7A5774]",
  },
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    icon: twitter,
    bg: "bg-[#6B6C9A]",
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    icon: instagram,
    bg: "bg-[#D8B08C]",
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    icon: facebook,
    bg: "bg-[#7A5774]",
  },
];

const ReviewsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start gap-8">
          <h2 className="text-2xl font-semibold text-black">
            Setapp in your words.
          </h2>

          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm max-w-xs">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex gap-3">
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 cursor-pointer"
              />
              <img src={twitter} alt="Twitter" className="w-6 cursor-pointer" />
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 cursor-pointer"
              />
              <img src={youtube} alt="YouTube" className="w-6 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 right-0 flex gap-2">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? reviews.length - 1 : prev - 1
                )
              }
              className="w-9 h-9 flex items-center justify-center 
              text-3xl transition"
            >
              ‹
            </button>
            <button
              onClick={() => setActive((prev) => (prev + 1) % reviews.length)}
              className="w-9 h-9 flex items-center justify-center 
              text-3xl transition"
            >
              ›
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${active * 33.33}%)` }}
            >
              {reviews.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[100%] md:min-w-[33.33%] bg-[#F5F5F5] rounded-xl p-4 flex flex-col"
                >
                  <div
                    className={`rounded-lg p-6 text-white flex-1 ${item.bg}`}
                  >
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>

                  <div className="mt-4 flex justify-between items-center px-2">
                    <div>
                      <p className="text-sm font-medium text-black">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.handle}</p>
                    </div>

                    <img src={item.icon} alt="social" className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {reviews.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  active === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
