import React from 'react';
import Image from 'next/image';

const Recommendations: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Recommendations</h2>
        <div className="bg-black border border-gray-800 rounded-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] opacity-30 rounded-lg"></div>
          </div>
          <div className="relative z-10 bg-black rounded-lg p-0.5">
            <div className="bg-black rounded-lg p-7">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                  <Image
                    src="/recommend_profile.webp"
                    alt="Francesca Kenney"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 mb-1">CEO, Green Orchid Consulting</p>
                  <h3 className="text-2xl font-bold">Francesca Kenney</h3>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-300">
                  GrowLexi's roadmap started with a tech-savvy virtual assistant and led to
                  a fully integrated CRM, back office setup, website, branding, event
                  management guidance, social media plan, and strategic partnership
                  support. The team has been empowering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;