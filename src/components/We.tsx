import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCogs, faUserCheck, faChartPie } from '@fortawesome/free-solid-svg-icons';

const We: React.FC = () => {
  return (
    <section id="about-us" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#8CC63F]">
            GrowLexi
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            <span className="bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">
              We attract decision-makers
            </span>
            <br />
            <span className="text-gray-200">
              and work with you on developing in-house processes to convert interested leads to qualified opportunities.
            </span>
          </h2>
          <div className="flex justify-center mt-8">
            <Link href="#contact" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-6 sm:px-8 py-3 bg-[#8CC63F] rounded-full leading-none flex items-center divide-x divide-gray-600 w-full sm:w-auto justify-center text-base">
                <span className="pr-4 text-black">Get Started</span>
                <span className="pl-4 text-black group-hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            <div className="text-center">
              <div className="text-[#8CC63F] mb-4 flex justify-center">
                <FontAwesomeIcon icon={faEnvelope} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Cold Outbound</h3>
              <p className="text-gray-300 text-sm">
                Attract high-value decision makers with our cutting-edge cold outbound solutions.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Our strategies are designed to capture attention and drive engagement.
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#8CC63F] mb-4 flex justify-center">
                <FontAwesomeIcon icon={faCogs} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Process Development</h3>
              <p className="text-gray-300 text-sm">
                We collaborate with you to build robust in-house processes for sustainable growth.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Streamline your operations and maximize efficiency with our tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#8CC63F] mb-4 flex justify-center">
                <FontAwesomeIcon icon={faUserCheck} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Lead Qualification</h3>
              <p className="text-gray-300 text-sm">
                Transform interested leads into qualified opportunities with our expert strategies.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Our proven methods ensure you focus on the most promising prospects.
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#8CC63F] mb-4 flex justify-center">
                <FontAwesomeIcon icon={faChartPie} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Strategic Process</h3>
              <p className="text-gray-300 text-sm">
                Strategize, Execute, and Elevate Your Sales Development Process
              </p>
              <p className="text-gray-400 text-xs mt-2">
                We draw the right connections, tailoring our approach to your unique business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8CC63F]">Our Approach</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Strategize, Execute, and Elevate Your Sales Development Process
          </p>
        </div>
      </div>
    </section>
  );
};

export default We;
