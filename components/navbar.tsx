// components/Navbar.js
"use client";

import { useUser, UserButton } from "@civic/auth-web3/react";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { signIn, signOut, user } = useUser();

  const doSignIn = useCallback(() => {
    console.log("Starting sign-in process");
    signIn()
      .then(() => {
        console.log("Sign-in completed successfully");
        console.log("User data:", user);
      })
      .catch((error) => {
        console.error("Sign-in failed:", error);
      });
  }, [signIn, user]);

  const doSignOut = useCallback(() => {
    console.log("Starting sign-out process");
    signOut()
      .then(() => {
        console.log("Sign-out completed successfully");
      })
      .catch((error) => {
        console.error("Sign-out failed:", error);
      });
  }, [signOut]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest("nav")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`py-4 fixed w-full top-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-gray-50 shadow-sm"
      }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo with hover effect */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <span className="text-blue-600 font-bold text-2xl tracking-tight transition-transform duration-300">
              oneClick
            </span>
            <span className="text-black font-bold text-2xl tracking-tight transition-all duration-300">
              .donate
            </span>
          </Link>
        </div>

        {/* Desktop Navigation with improved hover effects */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Donation"].map((item) => (
            <Link
              key={item}
              href={
                `/${item.toLowerCase()}` == "/home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              }
              className={`relative group py-1 transition-all duration-200 ${
                active === item
                  ? "text-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setActive(item)}>
              {item}
              {active === item ? (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                </span>
              ) : (
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Sign In and Sign Up buttons with improved hover effects */}
        <div className="hidden md:flex items-center space-x-3">
          {!user && (
            <button
              onClick={doSignIn}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
              Login / Sign up
            </button>
          )}

          {user && <p className="text-blue-500 font-bold">{user.name}</p>}
          {user && (
            <button
              onClick={doSignOut}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
              Sign out
            </button>
          )}
        </div>

        {/* Mobile menu button with animation */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu">
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100 top-3"
                }`}></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
          {["Home", "About", "Donation"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                active === item
                  ? "text-black font-medium bg-gray-100"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
              }`}
              onClick={() => {
                setActive(item);
                setMobileMenuOpen(false);
              }}>
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-2">
        
          {!user && (
            <button
              onClick={doSignIn}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
              Login / Sign up
            </button>
          )}

          {user && <p className="text-blue-500 font-bold">{user.name}</p>}
          {user && (
            <button
              onClick={doSignOut}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
              Sign out
            </button>
          )}
     
          </div>
        </div>
      </div>
    </nav>
  );
}
