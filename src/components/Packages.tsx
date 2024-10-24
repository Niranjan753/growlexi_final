'use client'
import React from 'react';
import Link from 'next/link';

const PackageCard: React.FC<{ title: string; features: string[] }> = ({ title, features }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-[#8CC63F] mb-4">{title}</h2>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#8CC63F] mr-2">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PackagesPage: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-100 text-transparent bg-clip-text">
            Our Packages
          </span>
        </h1>
        {/* Add your packages content here */}
        {/* You can use the package information you provided earlier */}
        
        <div className="text-center mt-10">
          <Link href="/#contact" className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-6 sm:px-8 py-3 bg-[#8CC63F] rounded-full leading-none flex items-center divide-x divide-gray-600 w-full sm:w-auto justify-center text-base">
              <span className="pr-4 text-black">Contact Us</span>
              <span className="pl-4 text-black group-hover:text-white transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
