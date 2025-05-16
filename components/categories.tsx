"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
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
  const [donationType, setDonationType] = useState("one-time");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState<{
    id: number;
    category: string;
    title: string;
    image: StaticImageData;
    progress: number;
    description: string;
  } | null>(null);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 50000];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsOpen]);

  interface Card {
    id: number;
    category: string;
    title: string;
    image: StaticImageData;
    progress: number;
    description: string;
  }

  const openModal = (card: Card): void => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCustomAmount("");
  };

  const sendFunds = () => {
    // Logic to send funds
    console.log("Sending funds...");
    console.log("Donation Type:", donationType);
    console.log("Custom Amount:", customAmount);
    console.log("Selected Card:", selectedCard);

    // Add success message or handling here

    closeModal();
  };

  const filteredCards =
    selected === "All"
      ? cards
      : cards.filter((card) => card.category === selected);

  return (
    <section className="w-full bg-white py-12 px-4 relative">
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
      <div className="max-w-4xl mx-auto mb-8 relative">
        <div className="flex flex-wrap gap-6 md:gap-10 font-medium items-center justify-center">
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
              <p className="text-sm text-gray-600 mb-3">{card.description}</p>
              {/* Progress Bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  {card.progress}%
                </span>
              </div>
              {/* Button */}
              <button
                className="w-full cursor-pointer border border-blue-600 text-blue-600 font-medium rounded-full py-2 transition hover:bg-blue-600 hover:text-white active:scale-95"
                onClick={() => openModal(card)}>
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Backdrop with Blur */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 z-40 bg-blend-color bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}>
          {/* Modal */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-auto z-50 transform transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                {selectedCard ? selectedCard.title : "Make a Donation"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Donation type toggle */}
            <div className="flex space-x-2 bg-gray-100 rounded-full p-1 mb-6">
              <button
                onClick={() => setDonationType("one-time")}
                className={`flex-1 py-2 rounded-full text-sm cursor-pointer font-semibold transition-all duration-300 ${
                  donationType === "one-time"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}>
                One-time
              </button>
              <button
                onClick={() => setDonationType("weekly")}
                className={`flex-1 py-2 rounded-full text-sm cursor-pointer font-semibold transition-all duration-300 ${
                  donationType === "weekly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}>
                Weekly
              </button>
            </div>

            {/* Amount options */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setCustomAmount(amount.toString())}
                  className={`py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 ${
                    customAmount === amount.toString()
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}>
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="text"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-8 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
              />
            </div>

            {/* Donate button */}
            <button
              className="w-full bg-blue-600 text-white py-3 cursor-pointer rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              onClick={sendFunds}>
              DONATE NOW
            </button>

            {/* Security notice */}
            <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Secure donation processing
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
