'use client';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function TextLoop({
  children,
  className,
  interval = 3,
  transition = { type: 'spring', stiffness: 150, damping: 19, mass: 1.2 },
  variants,
  onIndexChange,
}) {
  const items = Array.isArray(children) ? children : [children];
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % items.length;
      onIndexChange?.(nextIndex);
      return nextIndex;
    });
  }, [items.length, onIndexChange]);

  useEffect(() => {
    const timer = setInterval(next, interval * 1000);
    return () => clearInterval(timer);
  }, [next, interval]);

  const defaultVariants = {
    initial: { y: -20, opacity: 0, filter: 'blur(4px)' },
    animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
    exit: { y: 20, opacity: 0, filter: 'blur(4px)' },
  };

  const activeVariants = variants ?? defaultVariants;

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={activeVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
