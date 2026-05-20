import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.scss';

/**
 * Animated gradient background with floating blobs
 */
const AnimatedBackground = memo(function AnimatedBackground() {
  const blobs = useMemo(() => [
    { className: 'blob-1', duration: 20 },
    { className: 'blob-2', duration: 25 },
    { className: 'blob-3', duration: 30 },
  ], []);

  return (
    <div className="animated-bg">
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />
      
      {/* Noise texture */}
      <div className="noise" />
      
      {/* Floating gradient blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`blob ${blob.className}`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Radial gradient overlay */}
      <div className="radial-overlay" />
    </div>
  );
});

export default AnimatedBackground;
