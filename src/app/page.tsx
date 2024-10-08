'use client' 
import Image from "next/image";
import Link from "next/link";
import We from "../components/We";
import Roadmap from "../components/Roadmap";
import Recommendations from "../components/Recommendations";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full bg-opacity-20 rounded-full py-3">
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
              <Link href="#contact" className="bg-black border border-[#8CC63F] text-white px-6 py-2 text-base rounded-full hover:bg-[#8CC63F] hover:text-black transition duration-300">
                Let's Talk
              </Link>
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
        <main className="py-12 sm:py-20 text-center relative overflow-hidden mt-16">
          <div className="absolute inset-0 bg-black z-0"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-100 text-transparent bg-clip-text">
                The Precision-Driven
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#8CC63F] via-[#A0E350] to-[#5A822A] text-transparent bg-clip-text font-extrabold tracking-tight">
                  Outbound Sales Engine
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
              We connect B2B organizations with the right audience while laying the foundation to boost early-stage funnel conversions effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/case-study" className="relative inline-flex group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-6 sm:px-8 py-3 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600 w-full sm:w-auto justify-center text-base">
                  <span className="pr-4 text-gray-100">Case Study</span>
                  <span className="pl-4 text-[#8CC63F] group-hover:text-gray-100 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="#contact" className="relative inline-flex group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-6 sm:px-8 py-3 bg-[#8CC63F] rounded-full leading-none flex items-center divide-x divide-gray-600 w-full sm:w-auto justify-center text-base">
                  <span className="pr-4 text-black">Roadmap With Us</span>
                  <span className="pl-4 text-black group-hover:text-white transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        </main>
      </div>
      <div id="about-us"><We /></div>
      <div id="roadmap"><Roadmap /></div>
      <Recommendations />
      <Slider />
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}