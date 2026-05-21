import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaDatabase, FaCheckCircle } from 'react-icons/fa';
import { MdStorage } from 'react-icons/md';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';
import './Projects.scss';

export default function Projects() {
  // Memoize static data
  const projects = useMemo(() => [
    {
      title: 'Data Migration Management System',
      description: 'Developed an enterprise-grade Data Migration Management System using React.js, Spring Boot, Apache NiFi, MySQL, and PostgreSQL to automate cross-database migration workflows. Built custom frontend modules integrated with Spring Boot REST APIs and Apache NiFi workflows for migration execution and monitoring. Designed and configured Apache NiFi processors, processor groups, controller services, and data flow pipelines to manage source-to-target database mapping, validation, transformation, and reliable data migration operations between MySQL and PostgreSQL databases.',
      tech: ['React.js', 'Spring Boot', 'Apache NiFi', 'MySQL', 'PostgreSQL'],
      features: [
        'Cross-database migration workflows',
        'Apache NiFi processor configuration',
        'Source-to-target database mapping',
        'Data validation and transformation',
        'Migration execution monitoring',
        'Automated error handling',
      ],
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
      icon: MdStorage,
      image: `${import.meta.env.BASE_URL}DataMigration.png`,
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Claim Processing System',
      description: 'Built a Claim Processing System using Java, Spring Boot, RESTful APIs, and MySQL to automate insurance claim workflows, including policy validation, claim processing, approval workflows, customer management, and claim status tracking.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Hibernate'],
      features: [
        'Automated policy validation engine',
        'Multi-tier claim processing workflows',
        'Real-time approval management',
        'Customer portal with claim tracking',
        'Secure JWT authentication',
        'Comprehensive audit logging',
      ],
      gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
      icon: MdStorage,
      image: `${import.meta.env.BASE_URL}Insurance Verification Tools in Medical Billing Software.jpg`,
      demoLink: '#',
      githubLink: 'https://github.com/9703790514/Claim_Processing_System',
    },
    {
      title: 'Hospital Management System',
      description: 'Implemented a Hospital Management System using Spring Boot and React.js to manage OPD workflows, including patient registration, appointment scheduling, doctor consultations, prescription management, billing, and payment processing.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
      features: [
        'Patient registration and records',
        'Smart appointment scheduling',
        'Doctor consultation module',
        'Digital prescription system',
        'Automated billing and payments',
        'Patient history tracking',
      ],
      gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
      icon: FaDatabase,
      image: `${import.meta.env.BASE_URL}Hospital Management System_ Features, Modules, Functions, Advantages - Existek Blog.jpg`,
      demoLink: '#',
      githubLink: 'https://github.com/9703790514/Hospital_OPD_Management_System',
    },
  ], []);

  return (
    <>
      {/* Hero Section */}
      <Section className="projects__hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="projects__title">
            Featured <span>Projects</span>
          </h1>
          <p className="projects__description">
            A showcase of enterprise applications built with modern technologies,
            clean architecture, and best practices in software development.
          </p>
        </motion.div>
      </Section>

      {/* Projects Grid */}
      <Section className="projects__list">
        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="projects__project-link"
              >
                <Card
                  variant="glass"
                  className={cn(
                    'projects__item',
                    index % 2 === 0 ? 'projects__item--even' : 'projects__item--odd'
                  )}
                >
                {/* Project Thumbnail */}
                <div
                  className={cn(
                    'projects__thumbnail bg-gradient-to-br',
                    project.gradient,
                    index % 2 !== 0 && 'projects__content--order-2'
                  )}
                >
                  {/* Project Image */}
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="projects__thumbnail-image"
                    />
                  )}
                  
                  {/* Animated Background */}
                  <div className="projects__thumbnail-bg bg-noise" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                </div>

                {/* Project Content */}
                <div className="projects__content">
                  {/* Title */}
                  <div>
                    <motion.h2
                      className="projects__project-title"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h2>
                    <p className="projects__project-description">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="projects__tech-stack">
                    <h3 className="projects__tech-label">
                      Tech Stack
                    </h3>
                    <div className="projects__tech-tags">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * i }}
                        >
                          <Badge variant="primary" size="sm" className="hover:scale-105">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="projects__features">
                    <h3 className="projects__features-label">
                      Key Features
                    </h3>
                    <div className="projects__features-grid">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="projects__feature-item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * i }}
                        >
                          <FaCheckCircle className="text-base" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="projects__cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="gradient" className="projects__cta-card">
            <h2 className="projects__cta-title">
              Interested in Working Together?
            </h2>
            <p className="projects__cta-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="projects__cta-actions">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="group">
                  Let's Talk
                  <FiExternalLink className="text-base" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button variant="secondary" size="lg">
                  View Resume
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </Section>
    </>
  );
}
