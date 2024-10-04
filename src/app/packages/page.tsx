'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from '@/components/Footer';

const PackageCard = ({ title, features, isPrimary = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-black rounded-xl shadow-2xl p-8 border-2 ${isPrimary ? 'border-white' : 'border-[#8CC63F]'} flex flex-col`}
  >
    <h2 className={`text-2xl font-bold mb-6 ${isPrimary ? 'text-white' : 'text-[#8CC63F]'}`}>{title}</h2>
    <ul className="space-y-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className={`w-6 h-6 ${isPrimary ? 'text-white' : 'text-[#8CC63F]'} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className={isPrimary ? 'text-white' : 'text-gray-300'}>{feature}</span>
        </li>
      ))}
    </ul>
    <Link href="/#contact" className="mt-6">
      <button className="w-full py-3 px-6 rounded-md font-semibold bg-[#8CC63F] text-white hover:bg-[#7AB62F]">Activate</button>
    </Link>
  </motion.div>
);

const AddOnCard = ({ title, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-black rounded-xl shadow-2xl p-6 flex flex-col items-center"
  >
    <FontAwesomeIcon icon={icon} className="text-[#8CC63F] text-4xl mb-4" />
    <h3 className="text-xl font-bold text-[#8CC63F] text-center">{title}</h3>
  </motion.div>
);

export default function PackagesPage() {
  const packages = [
    {
      title: "Self-Managed Lead Activation",
      features: ["Target Customer Blueprint", "Monthly Maintenance/Support", "Setup Outbound Engines"]
    },
    {
      title: "Lead Activation Services",
      features: ["Everything in Self-Managed Lead Activation", "Email Health Monitoring", "Tailored Sales copy", "CRM Integration Support", "Outbound Engine access", "A/B Testing", "Monthly Reporting"]
    },
    {
      title: "Integrated Top of Funnel Management",
      features: ["Everything in Lead Activation Services", "2 hours Strategic Support Weekly", "Personalized Slack Channel", "Sales Dev Rep Hiring/Training Support", "Sales Development Playbook", "Sales SOP and Tracking"]
    }
  ];

  const addOns = [
    { title: "Automation Support", icon: faRobot },
    { title: "Custom APIs", icon: faCode },
    { title: "Extra Domains", icon: faGlobe },
    { title: "Extra Emails", icon: faEnvelope },
  ];

    return (
      <>
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <Link href="/" className="text-[#8CC63F] hover:underline mb-4 inline-block">&lt;- Back to homepage</Link>
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-center mb-16">Our Packages</motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <PackageCard key={index} title={pkg.title} features={pkg.features} isPrimary={index === 1} />
        ))}
      </div>
      <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-center mb-8">Add On Packages</motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {addOns.map((addOn, index) => (
          <AddOnCard key={index} title={addOn.title} icon={addOn.icon} />
        ))}
      </div>
        </div>
    </>
  );
}