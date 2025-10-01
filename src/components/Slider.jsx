import React, { useState } from "react";
import { Star } from "lucide-react";
import S1 from "src/assets/s1.webp";
import S2 from "src/assets/s2.webp";
import S3 from "src/assets/s3.webp";
import S4 from "src/assets/s4.webp";
const slides = [
  {
    stars: 1,
    img: S1,
    title: "Customize your drink",
    description:
      "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
  },
  {
    stars: 2,
    img: S2,
    title: "Earn rewards faster",
    description:
      "Get closer to free drinks and food by collecting Stars with every purchase.",
  },
  {
    stars: 3,
    img: S3,
    title: "Exclusive offers",
    description:
      "Unlock members-only offers and promotions available only through the app.",
  },
  {
    stars: 4,
    img: S4,
    title: "Free birthday treat",
    description:
      "Celebrate your birthday with a free drink or food item on us.",
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col bg-[#f1f8f6] pt-6">
      <div className="flex justify-center pb-4">
        <h1 className="text-2xl font-bold text-gray-600">
          Get your favorites for free
        </h1>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-full shadow-md transition-all ${
              active === index
                ? "bg-[#047044] text-white"
                : "bg-white text-gray-500 hover:bg-[#d0f0e4]"
            }`}
          >
            {Array.from({ length: slide.stars }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={active === index ? "#fff" : "none"}
                stroke={active === index ? "#fff" : "#047044"}
                strokeWidth={2}
              />
            ))}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#d4e9e2] py-6 px-4 md:px-20 rounded-xl shadow-inner">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#047044]">
          <img
            src={slides[active].img}
            alt={slides[active].title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-sm text-center md:text-left">
          <h2 className="font-bold text-xl mb-2 text-[#047044]">
            {slides[active].title}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {slides[active].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
