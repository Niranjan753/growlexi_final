'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const CaseStudy: React.FC = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-10 sm:py-20 max-w-3xl">
        <Link href="/" className="text-[#8CC63F] hover:text-[#A0E350] transition-colors duration-300 mb-4 sm:mb-8 inline-block text-sm sm:text-base">&lt;- Back to homepage</Link>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-10 sm:mb-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8CC63F] via-[#A0E350] to-[#5A822A]">
            First 60 Days:
          </span>
          <br />
          <span className="text-white">Case Study</span>
        </h1>

        <div className="mb-8 sm:mb-16 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 sm:p-8 rounded-2xl shadow-2xl">
          <p className="text-sm sm:text-base mb-6 sm:mb-10 leading-relaxed">
            Capturely, after the launch of its Virtual Headshot service was ready to take its sales to the next level. Teaming up with GrowLexi, they filled their sales pipeline and significantly improved Capturely's lead-to-opportunity conversion rate within 60 days.
          </p>
          <div className="relative">
            <Image 
              src="/chart.webp" 
              alt="Capturely Case Study" 
              width={800} 
              height={600} 
              className="mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          </div>
        </div>

        <section className="mb-8 sm:mb-16 bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#8CC63F]">The Capturely Challenge</h2>
          <p className="text-sm sm:text-base mb-2 sm:mb-4 leading-relaxed">
            Capturely's primary challenge was an undersaturated sales pipeline. Despite having product market fit, their existing sales and marketing strategies had grown stale and their pipeline plateaued. Capturely needed a fresh approach to reignite its growth engine.
          </p>
        </section>

        <section className="mb-8 sm:mb-16 bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#8CC63F]">Our Approach</h2>
          <ol className="list-decimal list-inside space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <li className="pb-2 border-b border-gray-700"><strong className="text-[#A0E350]">Discovery:</strong> Capturely met with Growlexi to dive into Capturely's sales development strategies to better understand what if any of GrowLexi's service offerings were capable of delivering the results they needed.</li>
            <li className="pb-2 border-b border-gray-700"><strong className="text-[#A0E350]">Roadmap:</strong> Determined to start with Growlexi's baseline Lead Activation Services within two weeks and after completing a short survey, Capturely elected an email-only outbound approach. This focused exclusively on the healthcare sector and was custom-tailored to engage two key Ideal Customer Profiles (ICPs): Executives and Marketing Team Leaders.</li>
            <li className="pb-2 border-b border-gray-700"><strong className="text-[#A0E350]">Construct and Implement:</strong> Based on the previous survey and with Capturely's buy-in, GrowLexi captured Capturely's relevance within the healthcare sector and crafted variations of sales copy. This included relevant references to role-specific pain points and recognizable clients like Anthem. Broken into steps, the copy was incorporated into automated sequences loaded with contact lists matching the ICP and scheduled at various intervals.</li>
            <li><strong className="text-[#A0E350]">Test:</strong> In an iterative workflow, A/B testing was incorporated to identify the most attention-grabbing subject lines and step variations within each sequence.</li>
          </ol>
        </section>

        <section className="mb-8 sm:mb-16 bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#8CC63F]">Measure</h2>
          <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <li><strong className="text-[#A0E350]">Outreach Success:</strong> Contacted over 3,200 decision-makers, activating 77 leads</li>
            <li><strong className="text-[#A0E350]">Activation to Meetings Attended Conversion:</strong> Achieved a remarkable 52% conversion rate from activated leads to meetings</li>
            <li><strong className="text-[#A0E350]">Opportunity Conversion:</strong> An astounding 95.23% of meeting attendees were qualified for opportunities</li>
            <li><strong className="text-[#A0E350]">Client Acquisition:</strong> Secured 6 new clients, with 34 additional open opportunities showing promise</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-16 bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#8CC63F]">Optimize (Re-Discovery)</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Ask about our plan to 5x these results in the next sixty days.
          </p>
        </section>

        <div className="text-center">
          <Link href="/#contact" className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-8 py-3 bg-[#8CC63F] rounded-full leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-2">
                <span className="pr-6 text-black">Contact Us to Learn More</span>
              </span>
              <span className="pl-6 text-black group-hover:text-white transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
