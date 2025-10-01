import { Star } from "lucide-react";
import React from "react";
import KeepRewards from "./KeepRewards";

const Cash = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center pt-8 bg-[#f3f1e7]">
      {/* Header */}
      <h1 className="text-2xl mb-3 font-semibold text-gray-800">
        Cash or card, you earn Stars
      </h1>
      <p className="text-gray-600 text-center max-w-2xl">
        No matter how you pay, you can earn Stars with your morning coffee. Those
        Stars add up to (really delicious) Rewards.
      </p>

      {/* First Row */}
      <div className="w-full border-b-2 mt-20 px-6 border-gray-400/50 pb-6 flex flex-col md:flex-row gap-10">
        {/* Left side - info */}
        <div className="md:w-72 flex flex-col items-start">
          <div className="flex items-center ">
            <span className="text-4xl font-bold text-gray-800">1</span>
            <Star size={28} className="text-[#047044]" fill="#047044" />
            <span className="text-3xl ml-2 font-bold text-gray-800">
              per dollar
            </span>
          </div>
          <p className="mt-2 text-gray-600 font-medium">Pay as you go</p>
        </div>

        {/* Right side - payment methods */}
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          {/* Method 1 */}
          <div className="flex items-start gap-4">
            <div className="h-32 w-32 flex-shrink-0">
              <img
                src="src/assets/1A.png"
                className="w-full h-full object-contain"
                alt="Scan and pay"
              />
            </div>
            <div className="text-gray-700 font-medium">
              <h2 className="mb-2 text-2xl text-gray-900">
                Scan and pay separately
              </h2>
              <p>Use cash or credit/debit card at the register.</p>
            </div>
          </div>

          {/* Method 2 */}
          <div className="flex items-start gap-4">
            <div className="h-32 w-32 flex-shrink-0">
              <img
                src="src/assets/1B.png"
                className="w-full h-full object-contain"
                alt="Save payment in app"
              />
            </div>
            <div className="text-gray-700 font-medium">
              <h2 className="mb-2 text-2xl text-gray-900">
                Save payment in the app
              </h2>
              <p>Register a credit/debit card or PayPal to earn rewards faster.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row (example for 2★ rewards) */}
      <div className="w-full px-6 border-b-2 mt-20 border-gray-400/50 pb-6 flex flex-col md:flex-row gap-10">
        {/* Left side - info */}
        <div className="md:w-72 flex flex-col items-start">
          <div className="flex items-center ">
            <span className="text-4xl font-bold text-gray-800">2</span>
            <Star size={28} className="text-[#047044]" fill="#047044" />
            <span className="text-3xl font-semibold ml-2 text-gray-800">
              per dollar
            </span>
          </div>
          <p className="mt-2 text-gray-600 font-medium">Earn faster with reloads</p>
        </div>

        {/* Right side - payment methods */}
        <div className="flex flex-col md:flex-row gap-8 flex-1">
          {/* Method 1 */}
          <div className="flex items-start gap-4">
            <div className="h-32 w-32 flex-shrink-0">
              <img
                src="src/assets/2A.png"
                className="w-full h-full object-contain"
                alt="Preload money"
              />
            </div>
            <div className="text-gray-700 font-medium">
              <h2 className="mb-2 text-2xl text-gray-900">
                Preload funds
              </h2>
              <p>Add money to your Starbucks Card and earn rewards every time.</p>
            </div>
          </div>

          {/* Method 2 */}
          <div className="flex items-start gap-4">
            <div className="h-32 w-32 flex-shrink-0">
              <img
                src="src/assets/2B.png"
                className="w-full h-full object-contain"
                alt="Auto reload"
              />
            </div>
            <div className="text-gray-700 font-medium">
              <h2 className="mb-2 text-2xl text-gray-900">
                Set up auto-reload
              </h2>
              <p>Automatically add funds and keep the rewards flowing.</p>
            </div>
          </div>
        </div>
      </div>
      <KeepRewards />
    </section>
  );
};

export default Cash;
