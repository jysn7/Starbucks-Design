import React from "react";

const steps = [
  {
    number: 1,
    title: "Create an account",
    description: (
      <>
        To get started,{" "}
        <span className="text-[#047044] underline">join now</span>. You can also{" "}
        <span className="text-[#047044] underline">join in the app</span> to get
        access to the full range of Starbucks Rewards benefits.
      </>
    ),
  },
  {
    number: 2,
    title: "Order and pay how you’d like",
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
    description: (
      <>
        As you earn Stars, you can redeem them for Rewards—like free food,
        drinks, and more.
      </>
    ),
  },
];

const GettingStarted = () => {
  return (
    <section className="min-h-[80vh] flex flex-col p-10 md:px-32 gap-16 justify-center items-center ">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-600">Getting started is easy</h1>
        <p className="text-gray-600">
          Earn Stars and get rewarded in a few easy steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-[#047044] text-[#047044] rounded-full font-bold">
              {step.number}
            </div>
            <h2 className="font-semibold text-lg">{step.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
