"use client"
// components/SmoothAnimatedSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SmoothAnimatedSectionProps {
  children: React.ReactNode;
}

const SmoothAnimatedSection: React.FC<SmoothAnimatedSectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 }); // Triggers when 10% of the element is visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start with element slightly below and invisible
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50, // Slide-up effect
      }}
      transition={{
        duration: 0.8, // Smooth duration for the animation
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-in-out transition curve
      }}
      style={{ willChange: 'transform, opacity' }} // Optimize for smooth transitions
    >
      {children}
    </motion.div>
  );
};

export default SmoothAnimatedSection;