import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -12,
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 1, 0.5, 1],
  duration: 0.35,
};

export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`w-full min-h-[calc(100vh-140px)] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

