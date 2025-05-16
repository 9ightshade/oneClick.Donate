"use client";
import Image from "next/image";
import { useState } from "react";
import kids from "@/public/kids.png";

const categories = [
  { label: "All" },
  { label: "Category 1" },
  { label: "Category 2" },
  { label: "Category 3" },
];

const cards = [
  {
    id: 1,
    category: "Category 1", // Children's Health
    title: "Providing life-saving medicine for children.",
    image: kids,
    progress: 78,
    description:
      "Your donation ensures that sick children receive the critical medication they urgently need.",
  },
  {
    id: 2,
    category: "Category 2", // Children's Education
    title: "Empowering young minds with quality education.",
    image: kids,
    progress: 35,
    description:
      "Help us provide school supplies, resources, and support for children to learn and grow.",
  },
  {
    id: 3,
    category: "Category 3", // Child Welfare
    title: "Creating safe homes for vulnerable children.",
    image: kids,
    progress: 62,
    description:
      "Support our efforts to provide shelter and care for children in unsafe or unstable situations.",
  },
  {
    id: 4,
    category: "Category 3", // Children's Nutrition (shifted for balance)
    title: "Ensuring nutritious meals for growing children.",
    image: kids,
    progress: 92,
    description:
      "Help us fight child hunger by providing access to healthy and nourishing food.",
  },
  {
    id: 5,
    category: "Category 1", // Children's Health
    title: "Supporting vital vaccinations for children's well-being.",
    image: kids,
    progress: 48,
    description:
      "Your contribution helps protect children from preventable diseases through essential vaccinations.",
  },
  {
    id: 6,
    category: "Category 2", // Children's Education
    title: "Fostering creativity through arts programs for kids.",
    image: kids,
    progress: 21,
    description:
      "Help us fund art, music, and other creative outlets that enrich children's development.",
  },
  {
    id: 7,
    category: "Category 3", // Child Welfare
    title: "Providing mentorship and guidance for at-risk youth.",
    image: kids,
    progress: 71,
    description:
      "Support our mentorship programs that offer guidance and positive role models for young people.",
  },
  {
    id: 8,
    category: "Category 1", // Children's Nutrition (shifted for balance)
    title: "Establishing school gardens for sustainable nutrition.",
    image: kids,
    progress: 59,
    description:
      "Help us create school gardens that teach children about healthy eating and provide fresh produce.",
  },
];

export default function CategoriesSection() {
  const [selected, setSelected] = useState("All");
  const [donationType, setDonationType] = useState<"one-time" | "weekly">(
    "one-time"
  );
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 50000];

  const sendFunds = () => {
    // Logic to send funds
    console.log("Sending funds...");
    console.log("Donation Type:", donationType);
    console.log("Custom Amount:", customAmount);
    setCustomAmount("");
    setModalIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
  };

  const filteredCards =
    selected === "All"
      ? cards
      : cards.filter((card) => card.category === selected);

  return (
    <section className="w-full bg-white py-12 px-4 ">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Help us <span className="text-blue-600">save</span> the world
        </h2>
        <p className="text-gray-500 mb-8">
          Be the spark that ignites change – your support fuels our mission and
          transforms lives.
        </p>
      </div>
      {/* Categories Tabs */}
      <div className="max-w-4xl mx-auto mb-8  relative ">
        {/* donation modal */}

        {
          modalIsOpen && <div className="bg-white rounded-[16px] shadow-2xl p-6 max-w-[480px] mx-auto  absolute left-1/3 top-1/4 z-10">
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
            onClick={() => sendFunds()}>
            DONATE NOW
          </button>
        </div>
        }

        {/* donation modal ends  */}

        <div className="flex flex-wrap gap-6 md:gap-10 font-medium items-center">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelected(cat.label)}
              className={`relative pb-2 transition-colors cursor-pointer ${
                selected === cat.label
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}>
              {cat.label}
              {selected === cat.label && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-600 rounded"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:shadow-xl">
            <div className="w-full h-44 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="w-full px-2">
              <span className="text-xs text-gray-400 font-semibold uppercase">
                {card.category}
              </span>
              <h3 className="font-semibold text-gray-900 text-base mt-1 mb-2 leading-tight">
                {card.title}
              </h3>
              {/* Progress Bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-1 bg-blue-600 rounded-full"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  {card.progress}%
                </span>
              </div>
              {/* Button */}
              <button className="w-full cursor-pointer border border-blue-600 text-blue-600 font-medium rounded-full py-2 transition hover:bg-blue-600 hover:text-white" onClick={sendFunds} >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
