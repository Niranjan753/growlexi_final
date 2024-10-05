'use client'
import React from 'react';

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
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Packages</h1>
      {/* Add your packages content here */}
      {/* You can use the package information you provided earlier */}
    </div>
  );
};

export default PackagesPage;