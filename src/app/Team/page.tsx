'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface TeamMemberProps {
  imageSrc?: string;
  name: string;
  role: string;
  description: string;
  linkedIn?: string;
  imageStyle?: React.CSSProperties;
  useIcon?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, role, description, linkedIn, imageStyle, useIcon }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 transform hover:shadow-xl transition-all duration-300 border border-gray-800 h-full">
    <div className="flex flex-col items-center h-full">
      <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
        {useIcon ? (
          <FontAwesomeIcon icon={faUser} className="text-[#8CC63F] text-6xl" />
        ) : (
          <Image src={imageSrc || ''} alt={name} layout="fill" objectFit="cover" className="rounded-full shadow-sm" style={imageStyle} />
        )}
      </div>
      <h3 className="text-xl font-bold text-[#8CC63F] mb-1">{name}</h3>
      <h4 className="text-sm font-semibold text-gray-300 mb-3">{role}</h4>
      <p className="text-gray-400 text-sm mb-4 text-center flex-grow">{description}</p>
      {linkedIn && (
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#8CC63F] hover:text-[#A0E350] transition-colors duration-200 text-sm mt-auto">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <span>LinkedIn</span>
        </a>
      )}
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      imageSrc: "/ceo.webp",
      name: "Stephen Comstock",
      role: "Founder",
      description: "Stephen's professional journey is a tapestry of strategic innovation and leadership across tech and sales. His expertise in leading teams and driving demand stands out. His experience in spearheading technology and sales strategies, reflects a dynamic blend of technological acumen and business growth savvy",
      linkedIn: "https://www.linkedin.com/in/stephencomstock"
    },
    {
      imageSrc: "/lead.webp",
      name: "Rishabh Pandey",
      role: "Operations Lead",
      description: "Rishabh has diverse experience ranging from customer relations to mastering sales development strategies. His skillset is a blend of analytical acumen and campaign expertise to innovate and drive operational excellence in the fast-paced tech landscape.",
      linkedIn: "https://www.linkedin.com/in/rishabh-pandey-b87b4519/"
    },
    {
      imageSrc: "/Ashish.jpg",
      name: "Ashish Vaishnav",
      role: "Senior Director of Implementation",
      description: "Expert in implementing complex technological solutions.",
      linkedIn: "https://www.linkedin.com/in/ashish-vaishnav/"
    },
    {
      name: "Brian Cooper",
      role: "Sales Enablement Manager",
      description: "Drives sales performance with innovative strategies.",
      linkedIn: "https://www.linkedin.com/in/brian-cooper-3b5973294/",
      useIcon: true
    },
    {
      imageSrc: "/keith.jpg",
      name: "Keith Stubitsch",
      role: "Implementation Manager",
      description: "Ensures flawless implementation of solutions for clients.",
      linkedIn: "https://www.linkedin.com/in/keith-stubitsch-a7b37712/"
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 mt-10 to-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8CC63F] to-[#5A822A] text-transparent bg-clip-text">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;