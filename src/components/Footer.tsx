import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#8CC63F]">GrowLexi</h3>
            <p className="text-sm">
              Precision-driven outbound sales engine connecting B2B organizations with the right audience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#8CC63F] transition-colors">Home</Link></li>
              <li><Link href="#about-us" className="hover:text-[#8CC63F] transition-colors">About Us</Link></li>
              <li><Link href="/packages" className="hover:text-[#8CC63F] transition-colors">Packages</Link></li>
              <li><Link href="#contact" className="hover:text-[#8CC63F] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/growlexi" className="text-white hover:text-[#8CC63F] transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
