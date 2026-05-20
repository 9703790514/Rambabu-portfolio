import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Section.scss';

/**
 * Section component with consistent spacing and animations
 */
const Section = memo(function Section({ 
  children, 
  className,
  containerClassName,
  animated = true,
  ...props 
}) {
  const Component = animated ? motion.section : 'section';

  const animationProps = animated ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  } : {};

  return (
    <Component
      className={cn('section', className)}
      {...animationProps}
      {...props}
    >
      <div className={cn('container section-container', containerClassName)}>
        {children}
      </div>
    </Component>
  );
});

export default Section;
