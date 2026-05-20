import { forwardRef, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import './Button.scss';

/**
 * Premium Button component with variants
 */
const Button = memo(forwardRef(function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  asChild,
  animated = true,
  ...props 
}, ref) {
  const Component = animated ? motion.button : 'button';

  const animationProps = animated ? {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.98 },
  } : {};

  return (
    <Component
      ref={ref}
      className={cn('btn', variant, size, className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}));

Button.displayName = 'Button';

export default Button;
