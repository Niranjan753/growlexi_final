'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faGlobe, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface PackageCardProps {
  title: string;
  features: string[];
  isPrimary?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, features, isPrimary }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-black rounded-xl shadow-2xl p-8 border-2 ${isPrimary ? 'border-white' : 'border-[#8CC63F]'} flex flex-col`}
  >
    <h3 className="text-xl font-bold text-[#8CC63F] text-center mb-4">{title}</h3>
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index} className="text-white">{feature}</li>
      ))}
    </ul>
  </motion.div>
);

interface AddOnCardProps {
  title: string;
  icon: IconDefinition;
}

const AddOnCard: React.FC<AddOnCardProps> = ({ title, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-black rounded-xl shadow-2xl p-6 flex flex-col items-center"
  >
    <FontAwesomeIcon icon={icon} className="text-[#8CC63F] text-4xl mb-4" />
    <h3 className="text-xl font-bold text-[#8CC63F] text-center">{title}</h3>
  </motion.div>
);

const packages: PackageCardProps[] = [
  {
    title: "Self-Managed Lead Activation",
    features: ["Target Customer Blueprint", "Monthly Maintenance/Support", "Setup Outbound Engines"]
  },
  {
    title: "Lead Activation Services",
    features: ["Everything in Self-Managed Lead Activation", "Email Health Monitoring", "Tailored Sales copy", "CRM Integration Support", "Outbound Engine access", "A/B Testing", "Monthly Reporting"],
    isPrimary: true
  },
  {
    title: "Integrated Top of Funnel Management",
    features: ["Everything in Lead Activation Services", "2 hours Strategic Support Weekly", "Personalized Slack Channel", "Sales Dev Rep Hiring/Training Support", "Sales Development Playbook", "Sales SOP and Tracking"]
  }
];

const addOns: AddOnCardProps[] = [
  { title: "Automation Support", icon: faRobot },
  { title: "Custom APIs", icon: faCode },
  { title: "Extra Domains", icon: faGlobe },
  { title: "Extra Emails", icon: faEnvelope },
];

export default function PackagesPage() {
  return (
    <>
      <div className="min-h-screen bg-black text-white py-20 px-4">
        <Link href="/" className="text-[#8CC63F] hover:underline mb-4 inline-block">&lt;- Back to homepage</Link>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-center mb-16">Our Packages</motion.h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-center mb-8">Add On Packages</motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {addOns.map((addOn, index) => (
            <AddOnCard key={index} {...addOn} />
          ))}
        </div>
      </div>
    </>
  );
}