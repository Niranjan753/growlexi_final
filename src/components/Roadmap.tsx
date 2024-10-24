  'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface RoadmapItemProps {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  inView: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, subtitle, description, index, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md"
      style={{ zIndex: 10 - index }}
    >
      <h3 className="text-lg font-bold mb-2 text-[#8CC63F]">{title}</h3>
      <h4 className="text-lg font-semibold mb-4 text-gray-400">{subtitle}</h4>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  );
};

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: "ROADMAP",
      subtitle: "Your strategy to attract more leads and convert them to qualified meetings.",
      description: "Our comprehensive roadmaps detail our plan to generate more interest, book more calls and inform future strategy.",
    },
    {
      title: "LEAD ACTIVATION",
      subtitle: "Attract high-value decision makers with our cutting-edge cold outbound solutions.",
      description: "Our strategies are designed to capture more attention and drive more engagement.",
    },
    {
      title: "TOP-OF-FUNNEL MANAGEMENT",
      subtitle: "Streamline top-of-funnel conversions and attribution by leveraging personalized templates and innovative dispositioning tactics.",
      description: "Our process is designed to convert interested prospects into qualified booked meetings while providing insights to re-engage those not yet ready to buy.",
    },
    {
      title: "FEEDBACK LOOP",
      subtitle: "Enhance outcomes with collaborative feedback and data-driven insights.",
      description: "Our feedback loop integrates input from all stakeholders alongside performance metrics like engagement and meeting bookings.",
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Your Roadmap</h2>
        <div className="flex flex-col items-center relative">
          {roadmapItems.map((item, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <div key={index} ref={ref}>
                <RoadmapItem
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  index={index}
                  inView={inView}
                />
                {index < roadmapItems.length - 1 && (
                  <div className="w-0.5 h-8 bg-[#8CC63F] my-2"></div>
                )}
              </div>
            );
          })}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8CC63F] -z-10 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;