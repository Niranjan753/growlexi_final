'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faBuilding, faBriefcase, faEnvelope, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    mobileNumber: '',
    hearAboutUs: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      email: '',
      mobileNumber: '',
      hearAboutUs: '',
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">Get in Touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: faUser, name: 'firstName', placeholder: 'First Name' },
              { icon: faUser, name: 'lastName', placeholder: 'Last Name' },
              { icon: faBuilding, name: 'companyName', placeholder: 'Company Name' },
              { icon: faBriefcase, name: 'jobTitle', placeholder: 'Job Title' },
              { icon: faEnvelope, name: 'email', placeholder: 'Email', type: 'email' },
              { icon: faPhone, name: 'mobileNumber', placeholder: 'Mobile Number', type: 'tel' },
            ].map((field, index) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 focus:border-[#8CC63F] outline-none transition duration-300 placeholder-gray-500"
                />
                <FontAwesomeIcon icon={field.icon} className="absolute top-4 right-3 text-gray-500" />
              </div>
            ))}
          </div>
          <div className="relative">
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 focus:border-[#8CC63F] outline-none transition duration-300 text-gray-500 appearance-none"
            >
              <option value="">How did you hear about us?</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
            <FontAwesomeIcon icon={faInfoCircle} className="absolute top-4 right-3 text-gray-500" />
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-white font-bold py-4 px-6 rounded-full hover:opacity-90 transition duration-300 flex items-center justify-center"
          >
            Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;