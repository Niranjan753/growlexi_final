    import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWrench, faBullseye, faChartLine } from '@fortawesome/free-solid-svg-icons';

const We: React.FC = () => {
  return (
    <section id="about-us" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#8CC63F]">
            GrowLexi
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            transforms your outreach.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl">
            ... so you don't have to. Whether you're a startup, an enterprise, or just a business looking to grow, we've got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            <div>
              <div className="text-[#8CC63F] mb-4">
                <FontAwesomeIcon icon={faBolt} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Cold Outbound</h3>
              <p className="text-gray-300 text-sm">
                Attract high-value decision makers with our cutting-edge cold outbound solutions.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Our strategies are designed to capture attention and drive engagement.
              </p>
            </div>
            <div>
              <div className="text-[#8CC63F] mb-4">
                <FontAwesomeIcon icon={faWrench} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Process Development</h3>
              <p className="text-gray-300 text-sm">
                We collaborate with you to build robust in-house processes for sustainable growth.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Streamline your operations and maximize efficiency with our tailored solutions.
              </p>
            </div>
            <div>
              <div className="text-[#8CC63F] mb-4">
                <FontAwesomeIcon icon={faBullseye} style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Lead Qualification</h3>
              <p className="text-gray-300 text-sm">
                Transform interested leads into qualified opportunities with our expert strategies.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Our proven methods ensure you focus on the most promising prospects.
              </p>
            </div>
            <div>
              <div className="text-[#8CC63F] mb-4">
                <FontAwesomeIcon icon={faChartLine} style={{ width: '48px', height: '48px' }} />
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
            At GrowLexi, we believe in a strategic approach that's as unique as your business. Our method isn't just about connecting dots; it's about drawing the right ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default We;
