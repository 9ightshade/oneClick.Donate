"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function DonationPage() {
  const [donationType, setDonationType] = useState<"one-time" | "weekly">(
    "one-time"
  );
  const [customAmount, setCustomAmount] = useState<string>("");

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 50000];

  const sendFunds = () => {
    // Logic to send funds
    console.log("Sending funds...");
    console.log("Donation Type:", donationType);
    console.log("Custom Amount:", customAmount);
    setCustomAmount("");

    // Here you would typically call your backend API to process the donation
    // For example:
    // await api.sendDonation({ type: donationType, amount: customAmount });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex justify-center items-center">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[50%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-[56px] font-bold leading-tight text-[#101828]">
              Donating is about{" "}
              <span className="text-[#1A73E8]">Making a Difference</span>.
            </h1>
            <p className="text-[18px] text-[#475467] max-w-[520px]">
              With just a Click, our app connects you to causes that ignite your
              passion, from local shelters providing warmth to global
              initiatives combating climate change. Witness the tangible results
              of your generosity through inspiring stories and updates, and join
              a community of compassionate individuals making a real difference,
              one effortless donation at a time.
            </p>
            <Link href="/donation">
              <button className="bg-[#1A73E8] text-white px-6 py-3 cursor-pointer rounded-[8px] text-[16px] font-semibold hover:bg-[#1660C4] transition-colors duration-300 shadow-md hover:shadow-lg">
                Donate Now
              </button>
            </Link>
          </div>

          {/* Right Donation Card */}
          <div className="bg-white rounded-[16px] shadow-2xl p-6 max-w-[480px] mx-auto">
            <div className="flex space-x-2 bg-gray-100 rounded-full p-1 mb-6 ">
              <button
                onClick={() => setDonationType("one-time")}
                className={`flex-1 py-2 rounded-full text-[14px] cursor-pointer font-semibold transition-all duration-300 ${
                  donationType === "one-time"
                    ? "bg-[#1A73E8] text-white shadow-md"
                    : "text-[#344054] hover:bg-gray-200"
                }`}>
                One-time
              </button>
              <button
                onClick={() => setDonationType("weekly")}
                className={`flex-1 py-2 rounded-full text-[14px] cursor-pointer font-semibold transition-all duration-300 ${
                  donationType === "weekly"
                    ? "bg-[#1A73E8] text-white shadow-md"
                    : "text-[#344054] hover:bg-gray-200"
                }`}>
                Weekly
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setCustomAmount(amount.toString())}
                  className={`py-2 rounded-lg text-[14px] font-semibold cursor-pointer transition-all duration-300 ${
                    customAmount === amount.toString()
                      ? "bg-[#1A73E8] text-white shadow-md"
                      : "bg-gray-100 text-[#344054] hover:bg-blue-100 hover:text-[#1A73E8]"
                  }`}>
                  ${amount}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent text-[#1A73E8]"
            />

            <button
              className="w-full bg-[#1A73E8] text-white py-3 cursor-pointer mt-4 rounded-[8px] text-[16px] font-semibold hover:bg-[#1660C4] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              onClick={sendFunds}>
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
