import React from "react";

const KeepRewards = () => {
  return (
    <section
      className="w-full rounded-none bg-cover bg-center flex flex-col justify-center items-center text-center text-white py-20 px-6"
      style={{
        backgroundImage: "url('src/assets/BG.png')", // replace with your actual background
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Keep the Rewards Coming
      </h2>
      <p className="max-w-xl mb-6 text-lg">
        Join Starbucks® Rewards and start collecting Stars every time you order.
        The more you earn, the more you enjoy.
      </p>
      <button className="bg-white text-[#047044] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#d0f0e4] transition-all">
        Join Now
      </button>
    </section>
  );
};

export default KeepRewards;
