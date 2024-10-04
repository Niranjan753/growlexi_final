'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Slider: React.FC = () => {
  const logos = Array.from({ length: 10 }, (_, i) => `com_${i + 1}`);

  return (
    <div className="overflow-hidden bg-black py-10">
      <motion.div
        className="flex"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image
              src={`/${logo}.webp`}
              alt={`Company logo ${(index % 10) + 1}`}
              width={logo === 'com_9' ? 100 : 150}
              height={logo === 'com_9' ? 33 : 50}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
