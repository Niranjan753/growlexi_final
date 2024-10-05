'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCode, faGlobe, faEnvelope, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface PackageCardProps {
  title: string;
  features: string[];
  isPrimary?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, features, isPrimary }) => (
  <div 
    className={`bg-gradient-to-b ${isPrimary ? 'from-[#8CC63F] to-[#5A822A]' : 'from-gray-900 to-black'} rounded-2xl shadow-2xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 ${isPrimary ? 'border-4 border-white' : ''}`}
  >
    <h3 className={`text-2xl font-bold ${isPrimary ? 'text-black' : 'text-[#8CC63F]'} text-center mb-6`}>{title}</h3>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className={`flex items-center ${isPrimary ? 'text-black' : 'text-white'}`}>
          <FontAwesomeIcon icon={faCheck} className={`mr-3 ${isPrimary ? 'text-black' : 'text-[#8CC63F]'}`} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

interface AddOnCardProps {
  title: string;
  icon: IconDefinition;
}

const AddOnCard: React.FC<AddOnCardProps> = ({ title, icon }) => (
  <div 
    className="bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
  >
    <FontAwesomeIcon icon={icon} className="text-[#8CC63F] text-4xl mb-4" />
    <h3 className="text-xl font-bold text-[#8CC63F] text-center mb-4">{title}</h3>
  </div>
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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[#8CC63F] hover:underline mb-4 inline-block">&lt;- Back to homepage</Link>
        <h1 className="text-4xl font-bold text-center mb-4">Our Packages</h1>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">Choose the perfect plan to supercharge your lead generation and sales process. Tailored solutions for businesses of all sizes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Add On Packages</h2>
        <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">Enhance your chosen plan with these powerful add-ons to further customize your lead generation strategy.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addOn, index) => (
            <AddOnCard key={index} {...addOn} />
          ))}
        </div>
      </div>
        </div>
        <Footer />
      </>
  );
}