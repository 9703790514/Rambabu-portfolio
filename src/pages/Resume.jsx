import { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { MdWork, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import './Resume.scss';

export default function Resume() {
  // Memoize static data
  const experiences = useMemo(() => ([
    {
      title: 'Associate Software Developer',
      company: 'IQGateway Pvt Ltd',
      location: 'Bangalore',
      period: 'April 2025 – Present',
      achievements: [
        'Developed React.js modules integrated with Spring Boot RESTful APIs and Apache NiFi workflows for enterprise migration and cross-database integration',
        'Built scalable backend services and microservices-based APIs using Java and Spring Boot for high-performance enterprise applications',
        'Implemented database mapping, validation, and error-handling workflows to ensure reliable enterprise data processing',
        'Achieved 80% test coverage using Mockito and Jest through CI/CD pipeline validation, reducing regression issues and improving application reliability',
        'Implemented JWT and Spring Security-based authentication and authorization for secure API communication and protected access control',
        'Maintained 90%+ code quality standards using SonarQube, code reviews, and debugging best practices in Agile environments',
        'Collaborated with CI/CD workflows for automated build validation, code integration, and deployment activities',
        'Developed AI-powered automation solutions using the Agno framework and LLM integrations to streamline workflow execution',
      ],
    },
    {
      title: 'Java Full Stack Developer Intern',
      company: 'TAP Academy',
      location: 'Bangalore',
      period: 'Sept 2023 – Mar 2024',
      achievements: [
        'Developed full-stack web applications using Java, J2EE, Spring, Hibernate, MySQL, React.js, HTML, CSS, and JavaScript',
        'Built RESTful APIs and integrated backend services with MySQL using JDBC and Hibernate for scalable application workflows',
        'Implemented backend functionalities using Core Java concepts including OOP, Collections, Multithreading, Exception Handling, and Java 8 features',
        'Developed responsive frontend interfaces and integrated backend services for seamless user experience and efficient data flow',
        'Built a capstone Online Food Delivery application with authentication, order management, database integration, and responsive UI functionality',
      ],
    },
  ]), []);

  const education = useMemo(() => ({
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Acharya Nagarjuna University',
    location: 'Guntur',
    period: 'Aug 2022 – Mar 2024',
    gpa: 'CGPA: 8.0',
    focus: 'Focus on software development, algorithms, and system design',
  }), []);

  const skills = useMemo(() => ({
    'Languages': ['Java', 'JavaScript', 'SQL'],
    'Frontend': ['React.js', 'HTML5', 'CSS3'],
    'Backend': ['Spring Boot', 'Spring MVC', 'Hibernate', 'JDBC', 'J2EE', 'Microservices'],
    'Databases': ['PostgreSQL', 'MySQL', 'Oracle Database', 'MongoDB (Basics)'],
    'API & Integration': ['RESTful APIs', 'Postman', 'Swagger', 'Apache NiFi'],
    'Testing & CI/CD': ['Mockito', 'Jest', 'CI/CD Pipeline Workflows', 'Docker'],
    'DevOps & Code Quality': ['Git', 'SonarQube'],
    'Project & Development Tools': ['Jira', 'Taiga', 'IntelliJ IDEA', 'Eclipse', 'VS Code'],
  }), []);

  const certifications = useMemo(() => [
    'Java Full Stack Development Certification – TAP Academy',
    'Java (Basic) Certification – HackerRank',
    'Coding Hackathon Participation Certificate – College Level Competition',
    'Top 4.2% ranking for 100+ consecutive days on LeetCode (2024)',
    'Solved 500+ DSA problems across LeetCode, GeeksforGeeks, HackerRank, and Coding Ninjas',
  ], []);

  const handleDownload = useCallback(() => {
    // Download the PDF file from public folder
    const pdfUrl = '/resume/Routhu_Rambabu_Java_FullStack_Developer_Resume3.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Routhu_Rambabu_Java_FullStack_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      {/* Header Section */}
      <Section className="resume__header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass" className="resume__header-card">
            <div className="resume__header-content">
              {/* Personal Info */}
              <div className="resume__personal-info">
                <h1 className="resume__name">
                  ROUTHU RAMBABU
                </h1>
                <p className="resume__role">
                  Java Full Stack Developer
                </p>
                <div className="resume__contact-details">
                  <div className="resume__contact-item">
                    <MdLocationOn className="text-base" />
                    Hyderabad, Telangana
                  </div>
                  <div className="resume__contact-item">
                    <MdEmail className="text-base" />
                    <a href="mailto:rambaburouthu514@gmail.com">
                      rambaburouthu514@gmail.com
                    </a>
                  </div>
                  <div className="resume__contact-item">
                    <MdPhone className="text-base" />
                    <a href="tel:+919703790514">
                      +91 9703790514
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <Button
                variant="gradient"
                size="lg"
                onClick={handleDownload}
                className="resume__download-button"
              >
                <HiDownload className="text-xl" />
                Download PDF
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Summary */}
      <Section className="resume__section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="resume__section-header">
            <FaCode className="text-3xl" />
            Professional <span>Summary</span>
          </h2>
          <Card variant="glass" className="resume__summary-card">
            <p className="resume__summary-text">
              Java Full Stack Developer with 1.8 years of experience in building
              scalable enterprise applications using Java, Spring Boot, Hibernate,
              React.js, and RESTful APIs. Proficient in backend development,
              microservices-based application design, secure authentication using JWT
              and Spring Security, and enterprise data integration using Apache NiFi.
              Skilled in PostgreSQL, MySQL, and Oracle Database, with hands-on
              experience in developing high-performance backend services,
              database-driven applications, and workflow automation solutions.
              Experienced in unit testing using Mockito and Jest, with strong
              problem-solving skills demonstrated through solving 500+ DSA problems
              across multiple coding platforms. Passionate about developing secure,
              scalable, and maintainable applications in Agile development environments.
            </p>
          </Card>
        </motion.div>
      </Section>

      {/* Experience */}
      <Section className="resume__section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="resume__section-header">
            <MdWork className="text-3xl" />
            Professional <span>Experience</span>
          </h2>
          
          <div className="space-y-6">
            {experiences.map((experience, expIndex) => (
              <Card key={expIndex} variant="glass" className="resume__experience-card">
                {/* Accent Line */}
                <div className="resume__experience-accent" />
                
                <div className="resume__experience-content">
                  {/* Header */}
                  <div className="resume__experience-header">
                    <div>
                      <h3 className="resume__experience-title">
                        {experience.title}
                      </h3>
                      <p className="resume__experience-company">
                        {experience.company}
                        <span> • {experience.location}</span>
                      </p>
                    </div>
                    <Badge variant="gradient" size="md" className="resume__experience-badge">
                      {experience.period}
                    </Badge>
                  </div>

                  {/* Achievements */}
                  <ul className="resume__achievements">
                    {experience.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="resume__achievement-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Technical Skills */}
      <Section className="resume__section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="resume__section-header">
            <FaCode className="text-3xl" />
            Technical <span>Skills</span>
          </h2>
          
          <Card variant="glass" className="resume__skills-card">
            <div className="resume__skills-content">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="resume__skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="resume__skill-category-title">
                    {category}
                  </h3>
                  <div className="resume__skill-tags">
                    {items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Badge variant="default" size="md" className="hover:border-primary-500/50">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Education */}
      <Section className="resume__section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="resume__section-header">
            <FaGraduationCap className="text-3xl" />
            <span>Education</span>
          </h2>
          
          <Card variant="glass" className="resume__education-card">
            {/* Accent Line */}
            <div className="resume__education-accent" />
            
            <div className="resume__education-content">
              <div className="resume__education-header">
                <div>
                  <h3 className="resume__education-degree">
                    {education.degree}
                  </h3>
                  <p className="resume__education-institution">
                    {education.institution}
                    <span> • {education.location}</span>
                  </p>
                </div>
                <Badge variant="gradient" size="md" className="resume__education-badge">
                  {education.period}
                </Badge>
              </div>
              <p className="resume__education-gpa">{education.gpa}</p>
              <p className="resume__education-focus">{education.focus}</p>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Certifications & Achievements */}
      <Section className="resume__section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="resume__section-header">
            <FaTrophy className="text-3xl" />
            Certifications & <span>Achievements</span>
          </h2>
          
          <Card variant="glass" className="resume__certifications-card">
            <ul className="resume__certifications-list">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="resume__certification-item"
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

      {/* CTA */}
      <Section className="resume__cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="gradient" className="resume__cta-card">
            <h2 className="resume__cta-title">
              Let's Work Together
            </h2>
            <p className="resume__cta-description">
              Interested in my profile? Let's discuss how I can contribute to your team.
            </p>
            <div className="resume__cta-actions">
              <a href="/contact">
                <Button variant="primary" size="lg" className="group">
                  <MdEmail className="text-xl" />
                  Contact Me
                </Button>
              </a>
              <Button variant="secondary" size="lg" onClick={handleDownload} className="group">
                <HiDownload className="text-xl" />
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </>
  );
}
