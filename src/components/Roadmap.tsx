'use client'
import React from 'react';

interface RoadmapItemProps {
  title: string;
  description: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, description }) => {
  return (
    <div className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4 text-[#8CC63F]">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
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
      description: "In the Roadmap phase, we translate our discoveries into a strategic plan. This comprehensive guide outlines actionable steps and timelines, setting the course for your sales journey.",
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
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Growth Roadmap</h2>
        <div className="flex flex-col items-center relative">
          {roadmapItems.map((item, index) => (
            <React.Fragment key={index}>
              <RoadmapItem
                title={item.title}
                description={item.description}
              />
              {index < roadmapItems.length - 1 && (
                <div className="w-0.5 h-8 bg-[#8CC63F] my-2"></div>
              )}
            </React.Fragment>
          ))}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8CC63F] -z-10 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;