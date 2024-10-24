import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-black text-white px-8 te-center flex items-center">
      <div className="container mx-auto px-5 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-[#8CC63F]">GrowLexi LLC</h3>
            <p className="text-sm">
              Precision-driven outbound sales engine connecting B2B organizations with the right audience.
            </p>
            <p className="text-sm mt-2">
              Sacramento, CA
            </p>
            <a href="tel:9165071348" className="text-sm mt-2 block hover:text-[#8CC63F] transition-colors">
              (916) 507-1348
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#8CC63F] transition-colors">Home</Link></li>
              <li><Link href="/Team" className="hover:text-[#8CC63F] transition-colors">Team</Link></li>
              <li><Link href={isHomePage ? "#roadmap" : "/#roadmap"} className="hover:text-[#8CC63F] transition-colors">Roadmap</Link></li>
              <li><Link href="/packages" className="hover:text-[#8CC63F] transition-colors">Packages</Link></li>
              <li><Link href={isHomePage ? "#contact" : "/#contact"} className="hover:text-[#8CC63F] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/company/growlexi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8CC63F] transition-colors">
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
