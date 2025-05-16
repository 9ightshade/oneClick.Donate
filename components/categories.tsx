"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import kids from "@/public/kids.png";
import { useCallback } from "react";

// Define types for better code organization
type Category = {
  id: string;
  label: string;
};

type Card = {
  id: number;
  category: string;
  title: string;
  image: StaticImageData;
  progress: number;
  description: string;
  target?: number;
  raised?: number;
};

// Set meaningful category names
const categories: Category[] = [
  { id: "all", label: "All Causes" },
  { id: "health", label: "Children's Health" },
  { id: "education", label: "Education" },
  { id: "welfare", label: "Child Welfare" },
];

// Enhance card data with more meaningful information
const cards: Card[] = [
  {
    id: 1,
    category: "health",
    title: "Providing life-saving medicine for children",
    image: kids,
    progress: 78,
    target: 100000,
    raised: 78000,
    description:
      "Your donation ensures that sick children receive the critical medication they urgently need.",
  },
  {
    id: 2,
    category: "education",
    title: "Empowering young minds with quality education",
    image: kids,
    progress: 35,
    target: 80000,
    raised: 28000,
    description:
      "Help us provide school supplies, resources, and support for children to learn and grow.",
  },
  {
    id: 3,
    category: "welfare",
    title: "Creating safe homes for vulnerable children",
    image: kids,
    progress: 62,
    target: 120000,
    raised: 74400,
    description:
      "Support our efforts to provide shelter and care for children in unsafe or unstable situations.",
  },
  {
    id: 4,
    category: "welfare",
    title: "Ensuring nutritious meals for growing children",
    image: kids,
    progress: 92,
    target: 50000,
    raised: 46000,
    description:
      "Help us fight child hunger by providing access to healthy and nourishing food.",
  },
  {
    id: 5,
    category: "health",
    title: "Supporting vital vaccinations for children's well-being",
    image: kids,
    progress: 48,
    target: 75000,
    raised: 36000,
    description:
      "Your contribution helps protect children from preventable diseases through essential vaccinations.",
  },
  {
    id: 6,
    category: "education",
    title: "Fostering creativity through arts programs for kids",
    image: kids,
    progress: 21,
    target: 60000,
    raised: 12600,
    description:
      "Help us fund art, music, and other creative outlets that enrich children's development.",
  },
  {
    id: 7,
    category: "welfare",
    title: "Providing mentorship and guidance for at-risk youth",
    image: kids,
    progress: 71,
    target: 90000,
    raised: 63900,
    description:
      "Support our mentorship programs that offer guidance and positive role models for young people.",
  },
  {
    id: 8,
    category: "health",
    title: "Establishing school gardens for sustainable nutrition",
    image: kids,
    progress: 59,
    target: 40000,
    raised: 23600,
    description:
      "Help us create school gardens that teach children about healthy eating and provide fresh produce.",
  },
];

export default function CategoriesSection() {
  const [selected, setSelected] = useState("all");
  const [donationType, setDonationType] = useState("one-time");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Predefined donation amounts
  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 50000];

  const closeModal = useCallback(() => {
    if (!isSubmitting) {
      setModalIsOpen(false);
      setShowSuccess(false);

      // Reset after animation completes
      setTimeout(() => {
        setCustomAmount("");
        setSelectedAmount(null);
      }, 300);
    }
  }, [isSubmitting]);

  // Handle outside clicks for modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    }

    if (modalIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [modalIsOpen, closeModal]);

  // Handle escape key for modal
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (modalIsOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modalIsOpen, closeModal]);

  const openModal = (card: Card): void => {
    setSelectedCard(card);
    setModalIsOpen(true);
    // Reset form state
    setCustomAmount("");
    setSelectedAmount(null);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers with validation
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const sendFunds = () => {
    if (!customAmount || parseInt(customAmount) <= 0) {
      return; // Validate amount
    }

    setIsSubmitting(true);

    // Simulate API call with delay
    setTimeout(() => {
      console.log("Donation submitted:", {
        type: donationType,
        amount: parseInt(customAmount),
        project: selectedCard?.title,
      });

      setIsSubmitting(false);
      setShowSuccess(true);

      // Auto close after success
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 1500);
  };

  const getFilteredCards = () => {
    return selected === "all"
      ? cards
      : cards.filter((card) => card.category === selected);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 relative">
      {/* Header with improved spacing and typography */}
      <div className="max-w-4xl mx-auto text-center text-black mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Help us <span className="text-blue-600">save</span> the world
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Be the spark that ignites change – your support fuels our mission and
          transforms lives.
        </p>
      </div>

      {/* Categories Tabs with better mobile layout */}
      <div className="max-w-4xl mx-auto mb-10 md:mb-16 relative">
        <div className="flex overflow-x-auto md:flex-wrap gap-2 md:gap-8 font-medium items-center justify-start md:justify-center pb-2 md:pb-0 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              aria-pressed={selected === cat.id}
              className={`relative px-4 py-2 whitespace-nowrap transition-all cursor-pointer  duration-300 rounded-full ${
                selected === cat.id
                  ? "text-white bg-blue-600 shadow-md"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards with improved layout and responsiveness */}
      <div className="max-w-7xl mx-auto grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {getFilteredCards().map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            tabIndex={0}
            role="button"
            onClick={() => openModal(card)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(card);
              }
            }}>
            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="w-full px-1 flex-1 flex flex-col">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                {categories.find((cat) => cat.id === card.category)?.label ||
                  card.category}
              </span>
              <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {card.description}
              </p>

              {/* Enhanced Progress Bar with labels */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>
                    Raised: {card.raised && formatCurrency(card.raised)}
                  </span>
                  <span>
                    Goal: {card.target && formatCurrency(card.target)}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                    {card.progress}% complete
                  </span>
                </div>
              </div>

              {/* Button with improved hover state */}
              <button
                className="w-full cursor-pointer bg-blue-600 text-white font-medium rounded-full py-3 transition-all duration-300 hover:bg-blue-700 active:scale-95 shadow-sm hover:shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(card);
                }}
                aria-label={`Donate to ${card.title}`}>
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with improved animations and UX */}
      {modalIsOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-modal-title">
          <div
            ref={modalRef}
            className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto z-50 transform transition-all duration-300 ease-out ${
              showSuccess
                ? "animate-[bounce_0.5s_ease-out]"
                : isSubmitting
                ? "animate-pulse"
                : "translate-y-8 opacity-0 animate-[slideUp_0.4s_ease-out_forwards]"
            }`}
            onClick={(e) => e.stopPropagation()}>
            {showSuccess ? (
              /* Success state */
              <div className="text-center py-8">
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your donation of {formatCurrency(parseInt(customAmount))} has
                  been processed successfully.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-green-600 text-white py-2  cursor-pointer px-6 rounded-full hover:bg-green-700 transition-colors">
                  Close
                </button>
              </div>
            ) : (
              /* Donation form */
              <>
                {/* Header with close button */}
                <div className="flex justify-between items-center mb-6">
                  <h3
                    id="donation-modal-title"
                    className="text-xl font-bold text-gray-900 pr-8">
                    {selectedCard
                      ? `Donate to: ${selectedCard.title}`
                      : "Make a Donation"}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition p-1 cursor-pointer rounded-full hover:bg-gray-100"
                    aria-label="Close donation form">
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

                {/* Donation type toggle with improved accessibility */}
                <fieldset className="mb-6">
                  <legend className="sr-only">Donation frequency</legend>
                  <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
                    <button
                      type="button"
                      onClick={() => setDonationType("one-time")}
                      aria-pressed={donationType === "one-time"}
                      className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer duration-300 ${
                        donationType === "one-time"
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}>
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("monthly")}
                      aria-pressed={donationType === "monthly"}
                      className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        donationType === "monthly"
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}>
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("weekly")}
                      aria-pressed={donationType === "weekly"}
                      className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer  duration-300 ${
                        donationType === "weekly"
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}>
                      Weekly
                    </button>
                  </div>
                </fieldset>

                {/* Impact message */}
                <div className="bg-blue-50 rounded-lg p-3 mb-6 text-sm text-blue-700">
                  Your{" "}
                  {donationType === "one-time"
                    ? "one-time donation"
                    : `${donationType} support`}{" "}
                  helps us continue our critical work with children in need.
                </div>

                {/* Amount options with grid for all screen sizes */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      aria-pressed={selectedAmount === amount}
                      className={`py-3 cursor-pointer  rounded-lg text-sm font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-blue-600 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}>
                      {formatCurrency(amount)}
                    </button>
                  ))}
                </div>

                {/* Custom amount input with improved visual feedback */}
                <div className="relative mb-6">
                  <label htmlFor="custom-amount" className="sr-only">
                    Custom donation amount
                  </label>
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    $
                  </span>
                  <input
                    id="custom-amount"
                    type="text"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full px-8 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 transition-all ${
                      customAmount
                        ? "border-blue-300 bg-blue-50 focus:ring-blue-500"
                        : "border-gray-300 focus:ring-blue-600"
                    }`}
                    aria-label="Custom donation amount"
                  />
                </div>

                {/* Donate button with loading state */}
                <button
                  className={`w-full py-4 cursor-pointer rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-102 active:scale-98 shadow-lg flex justify-center items-center ${
                    !customAmount || isSubmitting
                      ? "bg-blue-400 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={sendFunds}
                  disabled={!customAmount || isSubmitting}
                  aria-busy={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    `DONATE ${
                      customAmount
                        ? formatCurrency(parseInt(customAmount))
                        : "NOW"
                    }`
                  )}
                </button>

                {/* Enhanced security message */}
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
                  Secure donation processing with 256-bit encryption
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
