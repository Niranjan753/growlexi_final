'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const logos = Array.from({ length: 10 }, (_, i) => `com_${i + 1}`);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      if (slider) {
        const firstChild = slider.firstElementChild as HTMLElement;
        if (firstChild) {
          const width = firstChild.offsetWidth;
          slider.style.transition = 'transform 30s linear';
          slider.style.transform = `translateX(-${width * logos.length}px)`;

          setTimeout(() => {
            if (slider) {
              slider.style.transition = 'none';
              slider.style.transform = 'translateX(0)';
              for (let i = 0; i < logos.length; i++) {
                slider.appendChild(slider.firstElementChild!);
              }
            }
          }, 30000);
        }
      }
    };

    animate();
    const interval = setInterval(animate, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.sliderContainer} bg-gradient-to-b from-black via-gray-900 to-black`}>
      <div ref={sliderRef} className={styles.slider}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={`/${logo}.webp`}
              alt={`Company logo ${(index % 10) + 1}`}
              width={logo === 'com_9' ? 80 : 120}
              height={logo === 'com_9' ? 26 : 40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;