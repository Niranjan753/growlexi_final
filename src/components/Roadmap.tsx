'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';

interface RoadmapItemProps {
  title: string;
  description: string;
  isLeft: boolean;
  isLast: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, description, isLeft, isLast }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex items-center mb-16 relative`}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'} ${isLeft ? '' : 'ml-auto'}`}>
        <h3 className="text-2xl font-bold mb-2 text-[#8CC63F]">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8CC63F] rounded-full z-10">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#8CC63F] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        {isLast && (
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-[#8CC63F] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
        )}
      </div>
    </motion.div>
  );
};

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: "DISCOVERY",
      description: "At GrowLexi, Discovery is our starting point, where we dive deep to understand your unique business needs, target audience, and market dynamics. This phase is all about gathering insights to tailor our strategies effectively.",
    },
    {
      title: "ROADMAP",
      description: "In the Roadmap phase, we translate our discoveries into a strategic plan. This comprehensive guide outlines actionable steps and timelines, setting the course for your sales journey..",
    },
    {
      title: "CONSTRUCTION & IMPLEMENTATION",
      description: "At GrowLexi, we first 'Construct' by building customized solutions, including targeted outreach campaigns, to resonate with your audience and meet your goals. Then, we 'Implement' these strategies, ensuring seamless execution and engaging your audience for meaningful interactions.",
    },
    {
      title: "TEST",
      description: "Testing goes beyond mere observation. It's an art form where we meticulously scrutinize the performance of our strategies. This phase is an exploratory realm where we challenge our approaches, seeking out areas for enhancement and opportunities for innovation.",
    },
    {
      title: "MEASURE",
      description: "In the Measure phase, our focus shifts to quantifying the impact of our strategies. This isn't just about numbers; it's about understanding the story behind them. We delve into data-driven insights, assessing the effectiveness of each campaign and decision. This phase is crucial for making informed, intelligent decisions that drive your business forward.",
    },
    {
      title: "OPTIMIZE (RE-DISCOVERY)",
      description: "Re-discovery is where our journey circles back, yet moves forward. It is our commitment to refinement. Based on our testing and measurements, we fine-tune strategies, enhancing their efficiency and effectiveness to maximize your return on investment.",
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Growth Roadmap</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-[calc(100%-2rem)] w-1 bg-[#8CC63F] -translate-x-1/2"></div>
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              title={item.title}
              description={item.description}
              isLeft={index % 2 === 0}
              isLast={index === roadmapItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;