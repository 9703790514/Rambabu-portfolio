import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import TechIcon from '../components/ui/TechIcon';
import { cn } from '../utils/cn';
import './Home.scss';

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  
  // Memoize static data
  const roles = useMemo(() => [
    'Full Stack Developer', 
    'Java Developer', 
    'React Developer', 
    'Problem Solver'
  ], []);

  const techStack = useMemo(() => ({
    'Languages': ['Java', 'JavaScript', 'SQL'],
    'Frontend': ['React.js', 'HTML5', 'CSS3'],
    'Backend': ['Spring Boot', 'Hibernate', 'Microservices'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB'],
    'Tools': ['Apache NiFi', 'Git', 'Postman', 'Jest', 'Docker']
  }), []);

  const projects = useMemo(() => [
    {
      title: 'Data Migration Management System',
      description: 'Enterprise-grade cross-database migration with Apache NiFi workflows',
      tech: ['React.js', 'Spring Boot', 'Apache NiFi'],
      gradient: 'from-indigo-500/20 to-purple-500/20',
      image: '/DataMigration.png'
    },
    {
      title: 'Claim Processing System',
      description: 'Enterprise insurance system with automated workflows and policy validation',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      image: '/Insurance Verification Tools in Medical Billing Software.jpg'
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive OPD management with appointments and billing',
      tech: ['Spring Boot', 'React.js', 'MySQL'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      image: '/Hospital Management System_ Features, Modules, Functions, Advantages - Existek Blog.jpg'
    }
  ], []);

  const socialLinks = useMemo(() => [
    { icon: FaCode, href: 'https://github.com/9703790514', label: 'GitHub' },
    { icon: FiExternalLink, href: 'https://www.linkedin.com/in/rambabu-routhu/', label: 'LinkedIn' },
    { icon: FaCode, href: 'https://leetcode.com/u/9703790514/', label: 'LeetCode' },
    { icon: FaCode, href: 'https://www.hackerrank.com/profile/rambaburouthu514', label: 'HackerRank' },
    { icon: FaCode, href: 'https://www.geeksforgeeks.org/user/rambaburobdql/', label: 'GeeksforGeeks' },
  ], []);

  // Rotating role animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Memoize the spotlight background
  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(170, 59, 255, 0.15), transparent 80%)`
  );

  return (
    <>
      {/* Hero Section */}
      <Section className="home__hero">
        {/* Spotlight Effect */}
        <motion.div
          className="home__spotlight"
          style={{
            background: spotlightBackground,
          }}
        />

        <div className="home__container container">
          {/* Left Content */}
          <motion.div
            className="home__content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="gradient" size="md" className="home__badge">
                <AiOutlineStar className="text-xs" />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="home__heading-container">
              <motion.h1
                className="home__heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="home__name">
                  Rambabu
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                className="home__role-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="home__role-prefix">A</span>
                <motion.span
                  key={roleIndex}
                  className="home__role"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="home__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Java Full Stack Developer with <span>1.8 years of experience</span> in building scalable enterprise applications using <span>Java</span>, <span>Spring Boot</span>, <span>Microservices</span>, <span>React.js</span>, and <span>RESTful APIs</span>. Passionate about problem-solving with <span>500+ DSA problems</span> solved across multiple coding platforms.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="home__contact-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="home__contact-item">
                <MdLocationOn className="text-base" />
                Hyderabad, Telangana
              </div>
              <div className="home__contact-item">
                <MdPhone className="text-base" />
                <a href="tel:+919703790514">
                  +91 9703790514
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="home__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/projects">
                <Button variant="gradient" size="lg" className="group">
                  View Projects
                  <HiArrowRight className="text-base" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="group">
                  <MdEmail className="text-base" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="home__social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            className="home__profile-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card variant="glass" className="relative overflow-hidden group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="home__profile-content">
                {/* Avatar */}
                <motion.div
                  className="home__avatar"
                >
                  <img 
                    src="/Rambabu.jpg" 
                    alt="Routhu Rambabu" 
                    className="home__avatar-image"
                  />
                  <motion.div
                    className="home__avatar-overlay"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* Info */}
                <div className="home__profile-info">
                  <h3 className="home__profile-name">Routhu Rambabu</h3>
                  <p className="home__profile-title">Java Full Stack Developer</p>
                  <a 
                    href="mailto:rambaburouthu514@gmail.com"
                    className="home__profile-email"
                  >
                    <MdEmail className="text-sm" />
                    rambaburouthu514@gmail.com
                  </a>
                </div>

                {/* Stats */}
                <div className="home__stats">
                  {[
                    { label: 'Projects', value: '3+' },
                    { label: 'DSA Solved', value: '500+' },
                    { label: 'Experience', value: '1.8 Yrs' },
                  ].map((stat) => (
                    <div key={stat.label} className="home__stat">
                      <div className="home__stat-value">{stat.value}</div>
                      <div className="home__stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Resume Button */}
                <Link to="/resume" className="block mt-2">
                  <Button variant="secondary" size="lg" className="w-full group">
                    View Resume
                    <FiExternalLink className="text-lg" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Floating Elements */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="home__floating-element"
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${-10 + i * 5}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          className="home__tech-stack"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="container">
            <motion.div
              className="home__tech-stack-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 className="home__tech-stack-title">
                Tech <span>Stack</span>
              </h2>
              <p className="home__tech-stack-subtitle">
                Technologies I work with to build enterprise applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Card variant="glass" className="home__tech-unified-card">
                {Object.entries(techStack).map(([category, technologies], categoryIndex) => {
                  const isHorizontal = category === 'Languages' || category === 'Frontend';
                  
                  return (
                    <div key={category} className="home__tech-category-section">
                      <div className="home__tech-category-header">
                        <h3 className="home__tech-category-title">{category}</h3>
                      </div>
                      
                      <motion.div
                        className={cn(
                          "home__tech-category-content",
                          isHorizontal && "home__tech-category-content--horizontal"
                        )}
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 1.5 + categoryIndex * 0.1,
                            },
                          },
                        }}
                      >
                        {technologies.map((tech) => (
                          <motion.div
                            key={tech}
                            className={cn(
                              "home__tech-item",
                              isHorizontal && "home__tech-item--horizontal"
                            )}
                            variants={{
                              hidden: { opacity: 0, scale: 0.8, y: 10 },
                              visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                          >
                            <div className={cn(
                              "home__tech-item-icon",
                              isHorizontal && "home__tech-item-icon--horizontal"
                            )}>
                              <TechIcon name={tech} className="w-full h-full" />
                            </div>
                            <span className="home__tech-item-label">{tech}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  );
                })}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section className="home__projects-section">
        <motion.div
          className="home__section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="home__section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="home__section-subtitle">
            A selection of enterprise applications built with modern technologies
          </p>
        </motion.div>

        <div className="home__projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href="https://github.com/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="home__project-link"
              >
                <div className="home__project-card">
                  {/* Project Thumbnail */}
                  <div className={cn(
                    'home__project-thumbnail bg-gradient-to-br',
                    project.gradient
                  )}>
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="home__project-image"
                      />
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="home__project-title">
                    {project.title}
                  </h3>
                  <p className="home__project-description">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="home__project-tech">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="home__cta-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <HiArrowRight className="text-base" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
