import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Card.scss';

/**
 * Premium Card component with variants
 */
const Card = memo(function Card({ 
  children, 
  variant = 'default',
  className,
  animated = true,
  hover = true,
  ...props 
}) {
  const Component = animated ? motion.div : 'div';

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  } : {};

  return (
    <Component
      className={cn('card', variant, hover && 'hover', className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Card;
