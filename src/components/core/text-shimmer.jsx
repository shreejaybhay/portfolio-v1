'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function TextShimmer({ children, className, duration = 2, spread = 2 }) {
  return (
    <motion.span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(110deg, var(--muted-foreground) 25%, var(--foreground) 50%, var(--muted-foreground) 75%)',
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
      }}
      animate={{ backgroundPosition: ['200% center', '-200% center'] }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
        repeatDelay: spread,
      }}
    >
      {children}
    </motion.span>
  );
}
