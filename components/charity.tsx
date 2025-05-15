import React from 'react';

export default function CharityTemplate() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-800">
          Be The <span className="text-blue-500">Change</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
        Planting Seeds of Change, Cultivating a Brighter Future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Help Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Help</h3>
          <p className="text-gray-500 text-sm mb-6">
          At the heart of our mission lies a simple yet powerful belief: that collective generosity, no matter the size, can blossom into extraordinary impact. We are a dedicated platform connecting compassionate individuals like you with vital causes that uplift and empower. We believe in transparency, ensuring you see firsthand how your contributions are making a tangible difference in the lives of those who need it most.
          </p>
          <button className="mt-auto border border-blue-500 text-blue-500 rounded-md px-4 py-2 text-sm hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>

        {/* Donation Card */}
        <div className="bg-blue-500 rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path>
              <rect x="2" y="6" width="20" height="6" rx="2"></rect>
              <path d="M12 12v6"></path>
              <path d="M12 3v3"></path>
              <path d="M7 3h10"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Donation</h3>
          <p className="text-blue-100 text-sm mb-6">
          From ensuring access to life-saving medicine for vulnerable children and fostering quality education to providing safe havens and nourishing meals, we strive to support initiatives that create lasting positive change. Our platform simplifies the giving process, making it easy and secure for you to connect with the causes that resonate with your values. We provide regular updates and heartfelt stories, allowing you to witness the ripple effect of your kindness.
          </p>
          <button className="mt-auto border border-white text-white rounded-md px-4 py-2 text-sm hover:bg-blue-400 transition-colors">
            Learn More
          </button>
        </div>

        {/* Volunteer Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Volunteer</h3>
          <p className="text-gray-500 text-sm mb-6">
          Volunteering isn&apos;t just about giving back; it&apos;s about becoming an integral part of the change, connecting with our cause on a deeper level, and witnessing the transformative power of collective action firsthand. Join our vibrant community of dedicated individuals, discover your unique contribution, and experience the profound fulfillment of making a tangible difference with your time.
          </p>
          <button className="mt-auto border border-blue-500 text-blue-500 rounded-md px-4 py-2 text-sm hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}