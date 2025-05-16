"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function DonationPage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly" | "annual">("one-time");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  useEffect(() => {
    // Reset error when amount or type changes
    setError(null);
  }, [customAmount, donationType]);

  const validateAmount = (amount: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return "Please enter a valid amount greater than 0";
    }
    if (numAmount > 100000) {
      return "For donations over $100,000, please contact our team directly";
    }
    return null;
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and one decimal point
    if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handlePredefinedAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const sendFunds = async () => {
    const validationError = validateAmount(customAmount);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsProcessing(true);
    setError(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Donation successful:", {
        type: donationType,
        amount: parseFloat(customAmount),
        date: new Date().toISOString()
      });
      setShowThankYou(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("There was an error processing your donation. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setShowThankYou(false);
    setCustomAmount("");
    setSelectedAmount(null);
    setDonationType("one-time");
  };

  if (showThankYou) {
    return (
      <div className="relative min-h-screen bg-white overflow-hidden flex justify-center items-center">
        <div className="absolute top-0 left-0 w-1/2 h-2/5 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-2/5 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center py-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your contribution of ${parseFloat(customAmount).toFixed(2)} will make a meaningful difference.
            </p>
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer font-medium hover:bg-blue-700 transition-colors"
            >
              Make Another Donation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-1/2 h-2/5 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-2/5 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Donating is about{" "}
              <span className="text-blue-600 relative">
                Making a Difference
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              With just a click, our app connects you to causes that ignite your
              passion, from local shelters providing warmth to global
              initiatives combating climate change. Witness the tangible results
              of your generosity through inspiring stories and updates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donation">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </Link>
              <a href="#donation-form" className="px-6 py-3 border border-gray-300 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                View Donation Options
              </a>
            </div>
            
          </div>

          {/* Right Donation Card */}
          <div id="donation-form" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h2>
            
            {/* Donation Type Tabs */}
            <div className="flex space-x-2 bg-gray-100 rounded-full p-1 mb-6">
              <button
                onClick={() => setDonationType("one-time")}
                className={`flex-1 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 ${
                  donationType === "one-time"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}>
                One-time
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`flex-1 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 ${
                  donationType === "monthly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}>
                Monthly
              </button>
              <button
                onClick={() => setDonationType("annual")}
                className={`flex-1 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 ${
                  donationType === "annual"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}>
                Annual
              </button>
            </div>

            <p className="mb-4 text-gray-600">
              {donationType === "one-time" && "Make a one-time donation today"}
              {donationType === "monthly" && "Support us monthly for sustained impact"}
              {donationType === "annual" && "Make a yearly commitment with greater impact"}
            </p>

            <label className="block text-sm font-medium text-gray-700 mb-2">Select an amount</label>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePredefinedAmount(amount)}
                  className={`py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${
                    selectedAmount === amount
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}>
                  ${amount}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <input
                  id="customAmount"
                  type="text"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-describedby="amount-error"
                />
              </div>
              {error && (
                <p id="amount-error" className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">
                {donationType === "one-time" && "Your one-time donation helps fund immediate needs"}
                {donationType === "monthly" && "Monthly donations help us plan for the future"}
                {donationType === "annual" && "Annual donations provide substantial support with less processing"}
              </p>
              {donationType !== "one-time" && (
                <p className="text-xs text-gray-400">You can cancel your recurring donation at any time</p>
              )}
            </div>

            <button
              className={`w-full py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg flex items-center justify-center
                ${isProcessing 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 active:scale-98 hover:shadow-xl text-white"}`}
              onClick={sendFunds}
              disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Donate ${customAmount ? `$${parseFloat(customAmount).toFixed(2)}` : "Now"}`
              )}
            </button>

            <div className="mt-6 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span className="ml-2 text-sm text-gray-500">Secure donation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}