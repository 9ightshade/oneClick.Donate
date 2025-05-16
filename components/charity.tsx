"use client";
import React, { useState } from "react";
import {
  Heart,
  DollarSign,
  Users,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function CharityTemplate() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Card data for easier maintenance and expansion
  const cards = [
    {
      id: "help",
      title: "Help",
      description:
        "At the heart of our mission lies a simple yet powerful belief: that collective generosity, no matter the size, can blossom into extraordinary impact. We are a dedicated platform connecting compassionate individuals like you with vital causes that uplift and empower.",
      icon: <Heart />,
      color: "blue",
      buttonText: "Learn How",
    },
    {
      id: "donate",
      title: "Donation",
      description:
        "From ensuring access to life-saving medicine for vulnerable children to fostering quality education, we strive to support initiatives that create lasting positive change. Your contribution directly impacts lives and creates meaningful change.",
      icon: <DollarSign />,
      color: "blue",
      primary: true,
      buttonText: "Donate Now",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      description:
        "Volunteering isn't just about giving back; it's about becoming an integral part of the change, connecting with our cause on a deeper level, and witnessing the transformative power of collective action firsthand.",
      icon: <Users />,
      color: "blue",
      buttonText: "Join Us",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Be The <span className="text-blue-500">Change</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Planting Seeds of Change, Cultivating a Brighter Future
        </p>
        <div className="mt-6">
          <a
            href="#donate"
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
            Make a Difference Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col ${
              card.primary
                ? "bg-blue-500 transform hover:scale-105 hover:shadow-xl"
                : "bg-white hover:shadow-xl"
            } ${hoveredCard === card.id ? "scale-105" : ""}`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}>
            <div className="p-6 sm:p-8 flex-grow ">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  card.primary ? "bg-blue-400" : "bg-blue-50"
                }`}>
                <span className={card.primary ? "text-white" : "text-blue-500"}>
                  {card.icon}
                </span>
              </div>
              <h3
                className={`text-xl font-semibold mb-3 ${
                  card.primary ? "text-white" : "text-blue-500"
                }`}>
                {card.title}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  card.primary ? "text-blue-50" : "text-gray-500"
                }`}>
                {card.description}
              </p>
            </div>
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <button
                className={`w-full inline-flex items-center justify-center rounded-md px-4 cursor-pointer py-2 text-sm font-medium transition-colors ${
                  card.primary
                    ? "bg-white text-blue-500 hover:bg-blue-50"
                    : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                }`}>
                {card.buttonText}
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { number: "120+", label: "Projects" },
              { number: "15K+", label: "Donors" },
              { number: "3.2M", label: "Raised" },
              { number: "45K", label: "Lives Impacted" },
            ].map((stat, index) => (
              <div key={index} className="p-3">
                <p className="text-blue-500 text-2xl font-bold">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
