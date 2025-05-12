"use client";
import AboutUs from "@/components/aboutus";
import React from "react";

// Custom icon components using SVG
const HelpIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2.66663L20.12 9.05996L27.3334 10.12L22.6667 14.64L23.72 21.7733L16 18.4533L8.28003 21.7733L9.33336 14.64L4.66669 10.12L11.88 9.05996L16 2.66663Z"
      stroke="#1A73E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DonationIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2.66663L20.12 9.05996L27.3334 10.12L22.6667 14.64L23.72 21.7733L16 18.4533L8.28003 21.7733L9.33336 14.64L4.66669 10.12L11.88 9.05996L16 2.66663Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21.3333V10.6666"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6667 16L25.3334 21.3333H8.66669L11.3334 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VolunteerIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 20L11 15L4.66669 21.3333L11 27.6667H21L27.3334 21.3333L21 15L16 20Z"
      stroke="#1A73E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.6667C18.2091 10.6667 20 8.87581 20 6.66667C20 4.45753 18.2091 2.66667 16 2.66667C13.7909 2.66667 12 4.45753 12 6.66667C12 8.87581 13.7909 10.6667 16 10.6667Z"
      stroke="#1A73E8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryIcon1 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2.66663L20.12 9.05996L27.3334 10.12L22.6667 14.64L23.72 21.7733L16 18.4533L8.28003 21.7733L9.33336 14.64L4.66669 10.12L11.88 9.05996L16 2.66663Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryIcon2 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 21.3333V10.6666"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6667 16L25.3334 21.3333H8.66669L11.3334 16"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryIcon3 = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 20L11 15L4.66669 21.3333L11 27.6667H21L27.3334 21.3333L21 15L16 20Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.6667C18.2091 10.6667 20 8.87581 20 6.66667C20 4.45753 18.2091 2.66667 16 2.66667C13.7909 2.66667 12 4.45753 12 6.66667C12 8.87581 13.7909 10.6667 16 10.6667Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <HelpIcon />,
      title: "Help",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
      color: "text-[#1A73E8]",
      borderColor: "border-[#1A73E8]/10",
    },
    {
      icon: <DonationIcon />,
      title: "Donation",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
      color: "text-white",
      bgColor: "bg-[#1A73E8]",
      shadow: "shadow-xl",
    },
    {
      icon: <VolunteerIcon />,
      title: "Volunteer",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
      color: "text-[#1A73E8]",
      borderColor: "border-[#1A73E8]/10",
    },
  ];

  const categories = [
    {
      icon: <CategoryIcon1 />,
      title: "Category 1",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
    },
    {
      icon: <CategoryIcon2 />,
      title: "Category 2",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
    },
    {
      icon: <CategoryIcon3 />,
      title: "Category 3",
      description:
        "Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros vel neque vitae lorem molestie.",
    },
  ];

  return (
    <div className="bg-white py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[48px] text-black font-bold mb-4">
            Be The <span className="text-[#1A73E8]">Change</span>
          </h2>
          <p className="text-[18px] text-[#475467] max-w-[768px] mx-auto">
            Mattis et aliquam fermentum sed sagittis eu ellit mauris. Nisi eros
            vel neque vitae lorem molestie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                rounded-[16px] border p-6 text-center transition-all duration-300 
                ${
                  feature.bgColor ||
                  "bg-white border-gray-200 hover:border-[#1A73E8]/20"
                }
                ${feature.shadow || "hover:shadow-lg"}
                ${feature.borderColor || "border"}
              `}>
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3
                className={`text-[20px] font-semibold mb-4 ${
                  feature.color || "text-[#101828]"
                }`}>
                {feature.title}
              </h3>
              <p
                className={`text-[16px] mb-6 ${
                  feature.color === "text-white"
                    ? "text-white/80"
                    : "text-[#475467]"
                }`}>
                {feature.description}
              </p>
              <button
                className={`
                  px-5 py-2 rounded-[8px] text-[16px] font-semibold transition-all duration-300
                  ${
                    feature.bgColor
                      ? "text-white border border-white/20 hover:bg-white/10"
                      : "text-[#1A73E8] border border-[#1A73E8]/20 hover:bg-[#1A73E8]/10"
                  }
                `}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        <AboutUs />
      </div>
    </div>
  );
};

export default FeatureCards;
