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
    <section className="w-full py-14 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`relative rounded-2xl overflow-hidden pt-10 pb-24 lg:pb-0 ${testimonials[active].bg}`}
        >
          <div className="flex flex-col lg:flex-row relative min-h-[420px] lg:min-h-[520px]">
            <div className="lg:w-1/2 p-10 flex flex-col justify-center z-10">
              <p className="text-lg md:text-xl leading-relaxed max-w-md">
                {testimonials[active].text}
              </p>
              <p className="mt-4 text-sm opacity-80">
                {testimonials[active].author}
              </p>

              <button className="mt-10 w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <img
                  src={playBtn}
                  alt="Play"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src={testimonials[active].image}
                alt="Person"
                className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          h-[260px] sm:h-[300px] md:h-[360px] lg:h-[440px] xl:h-[480px]
          object-contain
        "
              />
            </div>
          </div>

          <div className="absolute top-6 right-6 flex gap-3 z-20">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="w-9 h-9 flex items-center justify-center 
               text-3xl hover:bg-white/30 transition"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % testimonials.length)
              }
              className="w-9 h-9 flex items-center justify-center 
               text-3xl hover:bg-white/30 transition"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
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
