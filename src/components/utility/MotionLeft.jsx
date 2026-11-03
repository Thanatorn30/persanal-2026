'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MotionLeft = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  distance = 50,
  className = '',
  triggerOnScroll = false,
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(!triggerOnScroll);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!triggerOnScroll || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [triggerOnScroll, threshold, triggerOnce, rootMargin]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ x: distance, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: distance, opacity: 0 }}
      transition={{
        duration: duration,
        ease: [0.25, 0.4, 0.25, 1],
        delay: isVisible ? delay : 0
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionLeft;
