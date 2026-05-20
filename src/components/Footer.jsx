import { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { HiArrowUp } from 'react-icons/hi';
import './Footer.scss';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const footerLinks = useMemo(() => [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ], []);

  const socialLinks = useMemo(() => [
    { icon: FiExternalLink, href: 'https://www.linkedin.com/in/routhu-rambabu', label: 'LinkedIn' },
    { icon: FaCode, href: 'https://github.com/rambabuwhy', label: 'GitHub' },
    { icon: MdEmail, href: 'mailto:rambaburouthu514@gmail.com', label: 'Email' },
  ], []);

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-container">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3 className="section-title">
              ROUTHU RAMBABU
            </h3>
            <p className="section-text">
              Full Stack Developer passionate about building enterprise applications
              with modern technologies and clean architecture.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="footer-section"
          >
            <h4 className="section-heading">
              Quick Links
            </h4>
            <nav className="footer-links">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="section-heading">
              Connect
            </h4>
            <div className="social-links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p className="section-text">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <motion.p
            className="copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Routhu Rambabu. Made with{' '}
            <AiFillHeart className="heart-icon" />{' '}
            using React & SCSS
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="scroll-top-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <HiArrowUp />
          </motion.button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay" />
    </footer>
  );
}
