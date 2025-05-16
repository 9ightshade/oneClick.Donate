"use client";
import React, { useState } from "react";
import { Heart, BookOpen, Users, ArrowRight, X, Check } from "lucide-react";
import Image from "next/image";
import donate from "@/public/donate.png"; // Ensure this path is correct
export default function NonprofitTemplate() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Category data for better maintainability
  const categories = [
    {
      id: "health",
      title: "HEALTH & WELLNESS",
      description:
        "This group focuses on the immediate physical well-being and health of children. We address their most urgent needs related to being healthy and safe, providing access to medical care, nutrition programs, and clean water initiatives.",
      icon: <Heart className="w-6 h-6" />,
      stats: { impacted: "12,450+", programs: "24", countries: "12" },
    },
    {
      id: "education",
      title: "EDUCATION & GROWTH",
      description:
        "This category is centered around nurturing the intellectual and creative development of children. We provide opportunities for learning, growth, and self-expression through school programs, creative arts, and educational resources.",
      icon: <BookOpen className="w-6 h-6" />,
      stats: { impacted: "9,300+", programs: "18", countries: "8" },
    },
    {
      id: "community",
      title: "COMMUNITY SUPPORT",
      description:
        "This area emphasizes the safety, security, and overall welfare of children in their environment and social circumstances. We ensure they have stable and supportive surroundings through family support programs and community development.",
      icon: <Users className="w-6 h-6" />,
      stats: { impacted: "15,200+", programs: "31", countries: "14" },
    },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 font-sans">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-sm uppercase font-bold text-blue-500 tracking-wide">
          ABOUT US
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 md:mb-0 max-w-xl leading-tight">
            We are here to support{" "}
            <span className="text-blue-500">vulnerable</span> communities.
          </h1>

          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 font-medium flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Donate Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hidden sm:block">
          <p className="text-blue-800 text-sm">
            <strong>Our mission:</strong> To create a world where every child
            has access to health, education, and a supportive community
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 sm:mt-12 items-center">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="bg-blue-200 rounded-2xl sm:rounded-full w-full aspect-square overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className=" flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={donate}
                    alt="Hand outstretched in support"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 w-24 sm:w-32 h-1 bg-blue-300 mx-auto"></div>
            <div className="mt-4 text-center">
              <span className="inline-flex cursor-pointer items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                15+ Years of Impact
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Categories */}
        <div className="lg:w-1/2 space-y-6 sm:space-y-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-start gap-4 sm:gap-6 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-blue-50 shadow-md"
                  : "hover:bg-gray-50"
              }`}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.id ? null : category.id
                )
              }>
              <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0 shadow-md">
                {category.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                    {category.title}
                  </h3>
                  <div className="text-blue-500">
                    {activeCategory === category.id ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {activeCategory === category.id
                    ? category.description
                    : category.description.split(".")[0] + "."}
                </p>

                {activeCategory === category.id && (
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <p className="text-blue-500 font-bold">
                        {category.stats.impacted}
                      </p>
                      <p className="text-xs text-gray-500">Lives Impacted</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <p className="text-blue-500 font-bold">
                        {category.stats.programs}
                      </p>
                      <p className="text-xs text-gray-500">Programs</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <p className="text-blue-500 font-bold">
                        {category.stats.countries}
                      </p>
                      <p className="text-xs text-gray-500">Countries</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="mt-6 sm:mt-8">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer rounded-lg px-6 py-3 font-medium transition-colors flex justify-center items-center gap-2">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Make a Donation
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Your contribution helps us support vulnerable communities around
              the world.
            </p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {["$10", "$25", "$50", "$100", "$250", "Custom"].map((amount) => (
                <button
                  key={amount}
                  className="border border-blue-200 hover:border-blue-500 rounded-lg py-2 text-sm font-medium text-blue-500 hover:bg-blue-50 transition-colors">
                  {amount}
                </button>
              ))}
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-medium transition-colors flex justify-center items-center gap-2">
              Continue to Payment
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Check className="w-4 h-4 text-green-500" />
              Secure payment processing
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
