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
              font-family: Arial, sans-serif;
              color: #ffffff;
              margin-bottom: 8px;
              display: block;
            }
            .hs-form-field input, .hs-form-field textarea {
              width: 100%;
              padding: 10px;
              margin-bottom: 15px;
              border: 1px solid #444;
              background-color: #222;
              color: #ffffff;
              border-radius: 4px;
              transition: border-color 0.3s ease, box-shadow 0.3s ease;
            }
            .hs-form-field input:hover, .hs-form-field textarea:hover {
              border-color: #8CC63F;
            }
            .hs-form-field input:focus, .hs-form-field textarea:focus {
              border-color: #8CC63F;
              box-shadow: 0 0 0 2px rgba(140, 198, 63, 0.2);
              outline: none;
            }
            .hs-button {
              background-color: #8CC63F;
              color: #ffffff;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-weight: bold;
              transition: background-color 0.3s ease, transform 0.2s ease;
            }
            .hs-button:hover {
              background-color: #7AB52E;
              transform: translateY(-2px);
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
        <div id="hubspot-form-container" className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-750"></div>
      </div>
    </section>
  );
};

export default Contact;