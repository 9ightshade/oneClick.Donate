// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-[#0052cc] transition-transform duration-300 hover:scale-105">
                OneClick <span className="text-black">Donate</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Donation", "Blog"].map((item) => (
              <Link
                key={item}
                href={
                  `/${item.toLowerCase()}` == "/home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }>
                <span
                  className={`text-gray-700 hover:text-[#0052cc] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    item === "Home" ? "text-[#0052cc] font-semibold" : ""
                  }`}>
                  {item}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Sign In/Sign Up Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/signin">
              <button className="text-[#0052cc] border border-[#0052cc] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0052cc] hover:text-white transition-all duration-300">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-[#0052cc] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300">
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0052cc] focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Home", "About", "Donation", "Blog"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <span
                className={`block text-gray-700 hover:text-[#0052cc] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  item === "Home" ? "text-[#0052cc] font-semibold" : ""
                }`}>
                {item}
              </span>
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-2">
            <Link href="/signin">
              <button className="w-full text-[#0052cc] border border-[#0052cc] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0052cc] hover:text-white transition-all duration-300">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full bg-[#0052cc] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
