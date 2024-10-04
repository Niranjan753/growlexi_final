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
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#8CC63F]">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: faUser, name: 'firstName', placeholder: 'First Name' },
              { icon: faUser, name: 'lastName', placeholder: 'Last Name' },
              { icon: faBuilding, name: 'companyName', placeholder: 'Company Name' },
              { icon: faBriefcase, name: 'jobTitle', placeholder: 'Job Title' },
              { icon: faEnvelope, name: 'email', placeholder: 'Email', type: 'email' },
              { icon: faPhone, name: 'mobileNumber', placeholder: 'Mobile Number', type: 'tel' },
            ].map((field, index) => (
              <div key={field.name} className="relative group">
                <FontAwesomeIcon icon={field.icon} className="absolute top-3 left-3 text-gray-400 group-focus-within:text-[#8CC63F] transition-colors duration-300" />
                <input
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-2 text-gray-300 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-[#8CC63F] transition duration-300 group-hover:border-gray-600"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 relative group">
            <FontAwesomeIcon icon={faInfoCircle} className="absolute top-3 left-3 text-gray-400 group-focus-within:text-[#8CC63F] transition-colors duration-300" />
            <select
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 text-gray-300 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-[#8CC63F] transition duration-300 group-hover:border-gray-600"
            >
              <option value="">How did you hear about us?</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-[#8CC63F] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#7AB52F] transition duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;