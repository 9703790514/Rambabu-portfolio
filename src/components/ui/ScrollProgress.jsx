import { memo } from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './ScrollProgress.scss';

/**
 * Scroll progress indicator component
 */
const ScrollProgress = memo(function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
    />
  );
});

export default ScrollProgress;
