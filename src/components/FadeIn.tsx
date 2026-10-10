import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactElement } from 'react';

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'viewport' | 'transition'> {
  children: ReactElement;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  x = 0, 
  y = 30,
  className,
  ...props 
}: FadeInProps) => {
  const child = children as ReactElement;
  
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      {...props}
      className={className}
    >
      {child}
    </motion.div>
  );
};
