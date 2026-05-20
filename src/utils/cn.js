import { clsx } from 'clsx';

/**
 * Utility function to merge class names with clsx
 * @param {...any} inputs - Class names or conditions
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return clsx(inputs);
}
