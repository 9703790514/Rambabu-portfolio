import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Badge.scss';

/**
 * Premium Badge/Pill component
 */
const Badge = memo(function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  className,
  animated = true,
  ...props 
}) {
  const Component = animated ? motion.span : 'span';

  const animationProps = animated ? {
    whileHover: { scale: 1.05 },
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  } : {};

  return (
    <Component
      className={cn('badge', variant, size, className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Badge;
