import Image from "next/image";
import Link from "next/link";
// import Clients from '../components/Clients'
import We from "../components/We";
import Roadmap from "../components/Roadmap";
import Recommendations from "../components/Recommendations";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Packages from "../components/Packages";

export default function LandingPage() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden rounded-3xl m-2 sm:m-4">
          <Image
            src="/back.png"
            alt="Background image with robotic arm"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="filter grayscale rounded-3xl"
            style={{ transform: "scale(0.8)" }}
          />
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <header className="p-2 sm:p-4 md:p-6 flex justify-center fixed top-0 left-0 right-0 z-50">
            <nav className="px-2 sm:px-4 md:px-8 py-1 sm:py-2 md:py-3">
              <ul className="flex space-x-2 sm:space-x-4 md:space-x-8 relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ease-in-out hover:bg-white/20"></div>
                {["Home", "About Us", "Packages", "Contact"].map(
                  (item, index) => (
                    <li key={item} className="relative z-10">
                      <Link
                        href={
                          item === "Home"
                            ? "/"
                            : item === "About Us"
                            ? "#about-us"
                            : item === "Contact"
                            ? "#contact"
                            : item === "Packages"
                            ? "/packages"
                            : `/${item.toLowerCase().replace(" ", "-")}`
                        }
                        className="text-white hover:text-[#8CC63F] relative overflow-hidden group px-1 sm:px-2 md:px-4 py-1 sm:py-2 inline-block text-xs sm:text-sm md:text-base"
                      >
                        <span className="relative z-10 transition-all duration-300">
                          {item}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8CC63F] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </header>
          <main className="flex-grow flex flex-col justify-center items-center text-center px-4 mt-16 sm:mt-20">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 max-w-4xl">
              <span className="relative">The Precision-Driven</span>{" "}
              <span className="text-[#8CC63F] relative">
                <span className="absolute -inset-1 bg-[#8CC63F] opacity-25 blur"></span>
                <span className="relative">Outbound</span>
              </span>{" "}
              <span className="relative">Sales Engine</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl">
              We connect B2B organizations with the right audience while laying
              the foundation to boost early-stage funnel conversions
              effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-study"
                className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded text-sm sm:text-base w-full sm:w-auto"
              >
                Case Study
              </Link>
              <Link
                href="#contact"
                className="bg-[#8CC63F] hover:bg-[#7AB62F] text-white px-4 py-2 rounded flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
              >
                Roadmap With Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </main>
        </div>
      </div>
      {/* <Clients /> */}
      <We />
      <Roadmap />
      <Recommendations />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}
