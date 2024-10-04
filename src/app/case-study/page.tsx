'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const CaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="container mx-auto px-4 py-10 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <Link href="/" className="text-[#8CC63F] hover:underline mb-4 sm:mb-8 inline-block text-sm sm:text-base">&lt;- Back to homepage</Link>
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16"
        >
          First 60 Days: Case Study
        </motion.h1>

        <motion.div 
          variants={fadeInUp}
          className="mb-8 sm:mb-16 bg-gray-900 p-4 sm:p-8 rounded-lg"
        >
          <p className="text-base sm:text-lg mb-4 sm:mb-8">
            Capturely, after the launch of its Virtual Headshot service was ready to take its sales to the next level. Teaming up with GrowLexi, they filled their sales pipeline and significantly improved Capturely's lead-to-opportunity conversion rate within 60 days.
          </p>
          <Image 
            src="/chart.webp" 
            alt="Capturely Case Study" 
            width={1080} 
            height={960} 
            className="mx-auto rounded-lg shadow-lg" 
          />
        </motion.div>

        <motion.section 
          variants={fadeInUp}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#8CC63F]">The Capturely Challenge</h2>
          <p className="text-base sm:text-lg mb-2 sm:mb-4">
            Capturely's primary challenge was an undersaturated sales pipeline. Despite having product market fit, their existing sales and marketing strategies had grown stale and their pipeline plateaued. Capturely needed a fresh approach to reignite its growth engine.
          </p>
        </motion.section>

        <motion.section 
          variants={fadeInUp}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#8CC63F]">Our Approach</h2>
          <ol className="list-decimal list-inside space-y-2 sm:space-y-4 text-sm sm:text-base">
            <li><strong>Discovery:</strong> Capturely met with Growlexi to dive into Capturely's sales development strategies to better understand what if any of GrowLexi's service offerings were capable of delivering the results they needed.</li>
            <li><strong>Roadmap:</strong> Determined to start with Growlexi's baseline Lead Activation Services within two weeks and after completing a short survey, Capturely elected an email-only outbound approach. This focused exclusively on the healthcare sector and was custom-tailored to engage two key Ideal Customer Profiles (ICPs): Executives and Marketing Team Leaders.</li>
            <li><strong>Construct and Implement:</strong> Based on the previous survey and with Capturely's buy-in, GrowLexi captured Capturely's relevance within the healthcare sector and crafted variations of sales copy. This included relevant references to role-specific pain points and recognizable clients like Anthem. Broken into steps, the copy was incorporated into automated sequences loaded with contact lists matching the ICP and scheduled at various intervals.</li>
            <li><strong>Test:</strong> In an iterative workflow, A/B testing was incorporated to identify the most attention-grabbing subject lines and step variations within each sequence.</li>
          </ol>
        </motion.section>

        <motion.section 
          variants={fadeInUp}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#8CC63F]">Measure</h2>
          <ul className="list-disc list-inside space-y-2 sm:space-y-4 text-sm sm:text-base">
            <li><strong>Outreach Success:</strong> Contacted over 3,200 decision-makers, activating 77 leads</li>
            <li><strong>Activation to Meetings Attended Conversion:</strong> Achieved a remarkable 52% conversion rate from activated leads to meetings</li>
            <li><strong>Opportunity Conversion:</strong> An astounding 95.23% of meeting attendees were qualified for opportunities</li>
            <li><strong>Client Acquisition:</strong> Secured 6 new clients, with 34 additional open opportunities showing promise</li>
          </ul>
         
        </motion.section>

        <motion.section 
          variants={fadeInUp}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#8CC63F]">Optimize (Re-Discovery)</h2>
          <p className="text-base sm:text-lg">
            Ask about our plan to 5x these results in the next sixty days.
          </p>
        </motion.section>

        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <Link href="/#contact" className="inline-block bg-[#8CC63F] hover:bg-[#7AB62F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300">
            Contact Us to Learn More
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CaseStudy;
