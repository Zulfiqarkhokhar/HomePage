import React, { useState } from "react";
import human from "../assets/human.svg";
import playBtn from "../assets/playBtn.svg";

const testimonials = [
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.",
    author: "Jason Staczec",
    image: human,
    bg: "bg-[#765070]",
  },
  {
    text: "Designers rely on Setapp to move faster, stay creative, and focus on what matters most.",
    author: "Creative Designer",
    image: human,
    bg: "bg-[#765070]",
  },
  {
    text: "Developers love how Setapp simplifies their workflow and boosts productivity.",
    author: "Software Engineer",
    image: human,
    bg: "bg-[#765070]",
  },
];

const TestomonialSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-10 sm:py-14 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative rounded-2xl overflow-hidden pt-8 sm:pt-10 ${testimonials[active].bg}`}
        >
          <div className="flex flex-col lg:flex-row relative">
            <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center z-10 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-sm sm:max-w-md">
                {testimonials[active].text}
              </p>
              <p className="mt-4 text-sm sm:text-base opacity-80">
                {testimonials[active].author}
              </p>

              <button className="mt-8 sm:mt-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full">
                <img
                  src={playBtn}
                  alt="Play"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
            <div className="lg:w-1/2 relative flex items-end">
              <img
                src={testimonials[active].image}
                alt="Person"
                className="
                  w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]
                  h-auto mx-auto
                  lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2
                "
              />
            </div>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 sm:gap-3 z-20">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center 
               text-2xl sm:text-3xl hover:bg-white/30 transition rounded-full"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % testimonials.length)
              }
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center 
               text-2xl sm:text-3xl hover:bg-white/30 transition rounded-full"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
          {testimonials.map((_, i) => (
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
    </section>
  );
};

export default TestomonialSection;
