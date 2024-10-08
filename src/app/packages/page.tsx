'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PackageCardProps {
  title: string;
  features: string[];
  price?: string;
}
  
const PackageCard: React.FC<PackageCardProps> = ({ title, features, price }) => {
  return (
    <div 
      className={`bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-6 flex flex-col h-full relative`}
    >
      {price && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">
          Starting at {price}
        </div>
      )}
      <h3 className={`text-xl font-bold text-[#8CC63F] text-center mb-4`}>{title}</h3>
      <ul className="space-y-2 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start text-white`}>
            <FontAwesomeIcon icon={faCheck} className={`mr-2 mt-1 text-[#8CC63F]`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Packages() {
  const packages = [
    {
      title: "Lead Activation Services",
      features: [
        "Target Account List",
        "Buyer Persona Development",
        "Email Sequence Development",
        "LinkedIn Profile Optimization",
        "A/B Testing",
        "Weekly Reporting",
        "Monthly Strategy Sessions"
      ],
      price: "$699"
    },
    {
      title: "Integrated Top of Funnel Management",
      features: [
        "Everything in Lead Activation Services",
        "Personalized Sales Outreach",
        "Appointment Setting",
        "Sales Development Playbook",
        "Sales KPI and Tracking"
      ]
    }
  ];

  const addOns = [
    { title: "Automation Support", features: ["Streamlined workflow processes", "Custom automation solutions", "Integration with existing systems"] },
    { title: "Custom APIs", features: ["Tailored API development", "Seamless data exchange", "Enhanced system connectivity"] },
    { title: "Extra Domains Configuration", features: ["Multiple domain setup", "Cross-domain tracking", "Improved brand segmentation"] }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white py-20 px-4 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl font-bold text-center mb-2">Our Packages</h1>
          <p className="text-center text-gray-400 mb-8">Choose the perfect plan to supercharge your lead generation and sales process.</p>
          
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4">Add On Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <PackageCard key={index} {...addOn} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}