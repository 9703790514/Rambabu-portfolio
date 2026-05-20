import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';
import { FaCode, FaCheckCircle } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';
import './Contact.scss';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize static data
  const contactInfo = useMemo(() => [
    {
      icon: MdLocationOn,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      color: 'text-purple-400',
    },
    {
      icon: MdEmail,
      label: 'Email',
      value: 'rambaburouthu514@gmail.com',
      href: 'mailto:rambaburouthu514@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: MdPhone,
      label: 'Phone',
      value: '+91 9703790514',
      href: 'tel:+919703790514',
      color: 'text-green-400',
    },
  ], []);

  const socialLinks = useMemo(() => [
    {
      icon: FiExternalLink,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rambabu-routhu/',
      color: 'contact__social-link--linkedin',
    },
    {
      icon: FaCode,
      label: 'GitHub',
      href: 'https://github.com/9703790514',
      color: 'contact__social-link--github',
    },
    {
      icon: FaCode,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/9703790514/',
      color: 'contact__social-link--leetcode',
    },
    {
      icon: FaCode,
      label: 'HackerRank',
      href: 'https://www.hackerrank.com/profile/rambaburouthu514',
      color: 'contact__social-link--hackerrank',
    },
    {
      icon: FaCode,
      label: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/rambaburobdql/',
      color: 'contact__social-link--geeksforgeeks',
    },
  ], []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  }, []);

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section className="contact__hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact__title">
            Get In <span>Touch</span>
          </h1>
          <p className="contact__description">
            Have a project in mind or just want to chat? I'm always open to discussing
            new opportunities, creative ideas, or potential collaborations.
          </p>
        </motion.div>
      </Section>

      {/* Main Content */}
      <Section className="contact__main">
        <div className="contact__grid">
          {/* Contact Info Sidebar */}
          <motion.div
            className="contact__sidebar"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info Cards */}
            <div className="contact__info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card variant="glass" className="contact__info-card">
                    <div className="contact__info-content">
                      <motion.div
                        className={cn('contact__info-icon', info.color)}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <info.icon className="text-2xl" />
                      </motion.div>
                      <div className="contact__info-details">
                        <h3 className="contact__info-label">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="contact__info-value contact__info-value--link"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="contact__info-value">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card variant="glass" className="contact__social-card">
                <h3 className="contact__social-title">Connect With Me</h3>
                <div className="contact__social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'contact__social-link',
                        social.color
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <social.icon className="text-xl" />
                      <span>
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card variant="gradient" className="contact__quick-info-card">
                <h3 className="contact__quick-info-title">Quick Response</h3>
                <p className="contact__quick-info-text">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="glass" className="contact__form-card">
              <h2 className="contact__form-title">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact__form">
                {/* Name Field */}
                <div className="contact__form-field">
                  <label htmlFor="name" className="contact__form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="contact__form-field">
                  <label htmlFor="email" className="contact__form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="contact__form-field">
                  <label htmlFor="message" className="contact__form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="contact__form-textarea"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant={submitted ? 'ghost' : 'gradient'}
                  size="lg"
                  className="contact__submit-button"
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <FaCheckCircle className="text-xl" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <IoSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="contact__success-message"
                  >
                    Thank you! I'll get back to you as soon as possible.
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Map Placeholder Section (Optional) */}
      <Section className="contact__map-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="glass" className="contact__map-card">
            <div className="contact__map-bg" />
            <div className="contact__map-noise bg-noise" />
            <div className="contact__map-content">
              <MdLocationOn className="text-[4rem]" />
              <h3 className="contact__map-title">Based in Hyderabad</h3>
              <p className="contact__map-subtitle">Available for remote opportunities worldwide</p>
            </div>
          </Card>
        </motion.div>
      </Section>
    </>
  );
}
