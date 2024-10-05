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
      if (slider && slider.parentNode) {
        const firstChild = slider.firstElementChild as HTMLElement;
        if (firstChild) {
          const width = firstChild.offsetWidth;
          slider.style.transition = 'transform 0.5s ease-in-out';
          slider.style.transform = `translateX(-${width}px)`;

          setTimeout(() => {
            if (slider && slider.parentNode) {
              slider.style.transition = 'none';
              slider.style.transform = 'translateX(0)';
              slider.appendChild(slider.firstElementChild!);
            }
          }, 500);
        }
      }
    };

    const interval = setInterval(animate, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.slider}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={`/${logo}.webp`}
              alt={`Company logo ${(index % 10) + 1}`}
              width={logo === 'com_9' ? 100 : 150}
              height={logo === 'com_9' ? 33 : 50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;