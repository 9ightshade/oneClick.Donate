"use client";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Youtube, Twitter } from "lucide-react";
import delivery from "@/public/person.png";
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Email submitted: ${email}`);
    setEmail("");
  };
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#5B8DF6]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 md:py-24">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be A Part Of Our Journey
          </h1>
          <p className="text-white text-base md:text-lg mb-8">
          &quot;We make a living by what we get, but we make a life by what we give.&quot; - Winston Churchill
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-gray-800 outline-none bg-white w-full sm:w-64"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors">
              Submit
            </button>
          </form>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
            <Image
              src={delivery}
              alt="Delivery"
              width={220}
              height={260}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Curve */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full">
          <path fill="#fff" d="M0,0 C480,90 960,0 1440,90 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 md:px-24">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Footer Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              About
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Donation
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Blog
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Contact
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-400 text-sm">
          <div>© 2022 ABC. All rights reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
