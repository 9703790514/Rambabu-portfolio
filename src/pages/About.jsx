import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaBrain } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { BsLightningFill } from 'react-icons/bs';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import './About.scss';

export default function About() {
  // Memoize static data
  const stats = useMemo(() => [
    { icon: FaCode, number: '500+', label: 'DSA Problems Solved', color: 'text-purple-400' },
    { icon: MdWork, number: '3+', label: 'Major Projects', color: 'text-blue-400' },
    { icon: FiTrendingUp, number: '1.8', label: 'Years Experience', color: 'text-green-400' },
    { icon: FaTrophy, number: 'Top 4.2%', label: 'LeetCode Ranking', color: 'text-pink-400' },
  ], []);

  const timeline = useMemo(() => [
    {
      type: 'work',
      title: 'Associate Software Developer',
      organization: 'IQGateway Pvt Ltd',
      location: 'Bangalore',
      period: 'April 2025 – Present',
      description: 'Building scalable enterprise applications with React.js, Spring Boot, Microservices, and Apache NiFi. Architecting secure RESTful APIs and implementing AI-powered automation.',
      highlights: [
        'Developed React.js modules with Spring Boot APIs and Apache NiFi workflows',
        'Built microservices-based APIs for high-performance enterprise applications',
        'Achieved 80% test coverage using Mockito and Jest through CI/CD pipeline',
      ],
    },
    {
      type: 'work',
      title: 'Java Full Stack Developer Intern',
      organization: 'TAP Academy',
      location: 'Bangalore',
      period: 'Sept 2023 – Mar 2024',
      description: 'Developed full-stack web applications using Java, Spring, Hibernate, MySQL, React.js, HTML, CSS, and JavaScript.',
      highlights: [
        'Built RESTful APIs and integrated backend services with MySQL',
        'Implemented backend functionalities using Core Java and Java 8 features',
        'Built capstone Online Food Delivery application',
      ],
    },
    {
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      organization: 'Acharya Nagarjuna University',
      location: 'Guntur',
      period: 'Aug 2022 – Mar 2024',
      description: 'CGPA: 8.0 • Focused on software development, algorithms, and system design',
    },
  ], []);

  const skillCategories = useMemo(() => [
    {
      icon: FaBrain,
      category: 'Backend Development',
      color: 'from-purple-500/20 to-pink-500/20',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'JDBC', 'REST APIs', 'Spring MVC', 'Microservices'],
    },
    {
      icon: BsLightningFill,
      category: 'Frontend Development',
      color: 'from-blue-500/20 to-cyan-500/20',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      icon: FaCode,
      category: 'Databases',
      color: 'from-green-500/20 to-emerald-500/20',
      skills: ['PostgreSQL', 'MySQL', 'Oracle Database', 'MongoDB', 'Database Design'],
    },
    {
      icon: FaTrophy,
      category: 'Tools & DevOps',
      color: 'from-orange-500/20 to-red-500/20',
      skills: ['Apache NiFi', 'Mockito', 'Jest', 'Git', 'Docker', 'CI/CD', 'Postman', 'SonarQube'],
    },
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }), []);

  return (
    <>
      {/* Hero Section */}
      <Section className="about__hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="about__title">
            About <span>Me</span>
          </h1>
          <p className="about__description">
            Java Full Stack Developer with hands-on experience building enterprise
            applications using <span>Java</span>, <span>Spring Boot</span>, <span>Hibernate</span>, and <span>React.js</span>. 
            Skilled in secure authentication (JWT, Spring Security),
            database integrations, and comprehensive testing.
          </p>
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section className="about__stats">
        <motion.div
          className="about__stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card variant="glass" className="about__stat-card">
                <motion.div
                  className="about__stat-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon className={`text-3xl ${stat.color}`} />
                </motion.div>
                <div className="about__stat-number">
                  {stat.number}
                </div>
                <div className="about__stat-label">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Journey Timeline */}
      <Section className="about__journey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about__section-header"
        >
          <h2 className="about__section-title">
            My <span>Journey</span>
          </h2>
          <p className="about__section-subtitle">Professional experience and education</p>
        </motion.div>

        <div className="about__timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card variant="glass" className="about__timeline-item">
                {/* Accent Line */}
                <div className="about__timeline-accent" />
                
                {/* Content */}
                <div className="about__timeline-content">
                  <div className="about__timeline-header">
                    <div>
                      <h3 className="about__timeline-title">
                        {item.title}
                      </h3>
                      <p className="about__timeline-org">
                        {item.organization}
                        {item.location && <span> • {item.location}</span>}
                      </p>
                    </div>
                    <Badge variant="gradient" size="md">
                      {item.period}
                    </Badge>
                  </div>
                  
                  <p className="about__timeline-description">{item.description}</p>
                  
                  {item.highlights && (
                    <ul className="about__timeline-highlights">
                      {item.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="about__timeline-highlight"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span>▹</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="about__skills">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about__section-header"
        >
          <h2 className="about__section-title">
            Technical <span>Expertise</span>
          </h2>
          <p className="about__section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="about__skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.category} variants={itemVariants}>
              <Card variant="glass" className="about__skill-card">
                <div className={`about__skill-thumbnail bg-gradient-to-br ${category.color}`}>
                  <category.icon className="text-[4rem]" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/10"
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                
                <h3 className="about__skill-title">
                  {category.category}
                </h3>
                
                <div className="about__skill-tags">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Badge variant="default" size="sm" className="hover:border-primary-500/50">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Certifications */}
      <Section className="about__certifications">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about__certifications-content"
        >
          <h2 className="about__section-title">
            Certifications & <span>Achievements</span>
          </h2>

          <Card variant="glass" className="about__certifications-card">
            <ul className="about__certifications-list">
              {[
                'Java Full Stack Development Certification – TAP Academy',
                'Java (Basic) Certification – HackerRank',
                'Top 4.2% ranking for 100+ consecutive days on LeetCode (2024)',
                'Solved 500+ DSA problems across LeetCode, GeeksforGeeks, HackerRank',
              ].map((cert, index) => (
                <motion.li
                  key={index}
                  className="about__certification-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaTrophy className="text-xl" />
                  {cert}
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </Section>
    </>
  );
}
