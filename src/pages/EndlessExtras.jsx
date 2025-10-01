import React from "react";
import R1 from "src/assets/r1.webp";
import R2 from "src/assets/r2.webp";
import R3 from "src/assets/r3.webp";
const steps = [
  {
    number: 1,
    title: "Fun freebies",
    img: R1,
    description: (
      <>
        Not only can you earn free coffee, look forward to a birthday treat
        plus coffee and tea refills during your visit.{" "}
        
      </>
    ),
  },
  {
    number: 2,
    title: "Order and pay how you’d like",
    img: R2,
    description: (
      <>
        Use cash, credit/debit card or save some time and pay right through the
        app. You’ll collect Stars all ways.
      </>
    ),
  },
  {
    number: 3,
    title: "Earn Stars, get Rewards",
    img: R3,
    description: (
      <>
        As you earn Stars, you can redeem them for Rewards—like free food,
        drinks, and more.
      </>
    ),
  },
];

const EndlessExtras = () => {
  return (
    <section className="min-h-[80vh] flex flex-col px-6 md:px-32 py-16 gap-16 justify-center items-center ">
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-600">Endless Extras</h1>
        <p className="text-gray-600">
          Joining Starbucks Rewards means unlocking access to exclusive
          benefits. As a member, you’ll be the first to know about exciting
          new products, special offers, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 w-full max-w-6xl">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h2 className="font-semibold text-lg">{step.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {step.description}
            </p>
            <p className="text-[#047044] underline cursor-pointer">Learn more</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndlessExtras;
