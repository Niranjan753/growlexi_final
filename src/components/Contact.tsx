'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import Footer from './Footer';

declare global {
  interface Window {
    hbspt: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // Create HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22203768",
          formId: "8db9dfe2-c595-4bf9-b45d-379459b82108",
          target: "#hubspot-form-container",
          css: `
            .hs-form-field label {
              font-family: Arial, Helvetica, sans-serif;
              color: #ededed;
              margin-bottom: 8px;
            }
            .hs-form-field input, .hs-form-field textarea {
              background-color: #1a1a1a;
              border: 1px solid #333;
              color: #ededed;
              padding: 10px;
              border-radius: 4px;
              font-family: Arial, Helvetica, sans-serif;
            }
            .hs-button {
              background-color: #8CC63F;
              color: #0a0a0a;
              padding: 12px 24px;
              border: none;
              border-radius: 4px;
              font-weight: bold;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .hs-button:hover {
              background-color: #5A822A;
            }
          `
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">Get in Touch</span>
        </h2>
        <div id="hubspot-form-container" className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"></div>
      </div>
    </section>
  );
};

export default Contact;