'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, role, description }) => (
  <div className="flex flex-col items-center mb-12 md:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
    <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative mb-4">
      <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" className="rounded-full" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-[#8CC63F] mb-2 text-center">{name}</h3>
    <h4 className="text-lg md:text-xl font-semibold text-white mb-4 text-center">{role}</h4>
    <p className="text-gray-300 text-center text-sm md:text-base max-w-xs md:max-w-sm">{description}</p>
  </div>
);

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      imageSrc: "/ceo.webp",
      name: "Stephen Comstock",
      role: "Business Advisor",
      description: "Stephen's professional journey is a tapestry of strategic innovation and leadership across tech and sales. His expertise in leading teams and driving demand stands out. His experience in spearheading technology and sales strategies, reflects a dynamic blend of technological acumen and business growth savvy."
    },
    {
      imageSrc: "/lead.webp",
      name: "Rishabh Pandey",
      role: "Operations Lead",
      description: "Rishabh has diverse experience ranging from customer relations to mastering sales development strategies. His skillset is a blend of analytical acumen and campaign expertise to innovate and drive operational excellence in the fast-paced tech landscape."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-[#8CC63F] hover:underline mb-6 md:mb-8 inline-block text-sm md:text-base">&lt;- Back to homepage</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Team</h1>
          <div className="flex flex-wrap justify-center md:justify-around items-start">
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