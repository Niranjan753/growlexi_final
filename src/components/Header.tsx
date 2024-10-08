'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLetsTalkClick = () => {
    router.push('/#contact');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full bg-opacity-20 rounded-full">
        <div className="w-32 h-12 relative cursor-pointer" onClick={handleLogoClick}>
          <Image
            src="/logo.webp"
            alt="GrowLexi Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#8CC63F] transition duration-300">Home</Link>
          <Link href="/packages" className="text-white hover:text-[#8CC63F] transition duration-300">Packages</Link>
          <Link href="/Team" className="text-white hover:text-[#8CC63F] transition duration-300">Team</Link>
          <button
            onClick={handleLetsTalkClick}
            className="bg-[#8CC63F] text-black px-4 py-2 rounded hover:bg-[#7AB52E] transition-colors"
          >
            Let's Talk
          </button>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black">
          <Link href="/" className="block text-white hover:text-[#8CC63F] py-2">Home</Link>
          <Link href="/packages" className="block text-white hover:text-[#8CC63F] py-2">Packages</Link>
          <Link href="/Team" className="block text-white hover:text-[#8CC63F] py-2">Team</Link>
          <Link href="#contact" className="block bg-black border border-[#8CC63F] text-white px-6 py-2 text-base rounded-full hover:bg-[#8CC63F] hover:text-black mt-2 mx-auto w-max">
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;