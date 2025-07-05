import styles from "../styles/Skills.module.css";
import reactImg from "../assets/images/reactImg.png";
import api from "../assets/images/api.avif";
import typeImg from "../assets/images/typescript.jpg";
import git from "../assets/images/git.png";
import django from "../assets/images/django.png";
import colla from "../assets/images/colla.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const SkillsPage = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quad",
      once: true,
    });
  }, []);

  const skills = [
    {
      title: "React Proficiency",
      description:
        "I specialize in creating dynamic and user-friendly interfaces with React, ensuring your web applications are both efficient and engaging. My skills include component-based architecture, state management, responsive design, performance optimization, and third-party integrations.",
      image: reactImg,
      points: [
        "Component-Based Architecture",
        "State Management (Redux/Context)",
        "Hooks & Functional Components",
        "Performance Optimization",
        "React Router",
      ],
    },
    {
      title: "Django Backend Mastery",
      description:
        "With Django, I build robust, secure, and scalable backend systems. My Django expertise covers full REST API development, ORM optimization, authentication systems, and seamless integration with modern frontends like React.",
      image: django,
      points: [
        "Django REST Framework (DRF)",
        "Authentication (JWT, sessions)",
        "Django ORM & Query Optimization",
        "Admin Customization",
        "Django + React Integration",
      ],
    },
    {
      title: "Unit Testing & Test-Driven Development",
      description:
        "I write unit and integration tests to ensure application stability, prevent regressions, and foster maintainable codebases. I’m confident using testing libraries across both frontend and backend stacks.",
      image: git,
      points: [
        "Jest for React Components",
        "React Testing Library",
        "Django Unit Tests",
        "Test-Driven Development (TDD)",
        "Continuous Integration (CI) with Testing",
      ],
    },
    {
      title: "Performance & Automated Testing",
      description:
        "Beyond unit testing, I ensure your applications are performant, scalable, and production-ready through automated test pipelines, performance benchmarks, and asynchronous task verification.",
      image: django, // Optional: replace with a performance or automation icon if available
      points: [
        "Lighthouse & Chrome DevTools Audits",
        "Pytest + Celery Task Testing",
        "Asynchronous Testing in Django/React",
        "Automated Email Testing (SMTP Mocks)",
        "CI/CD Integration (GitHub Actions, Jenkins)",
      ],
    },
    {
      title: "TypeScript Expertise",
      description:
        "I ensure your codebase remains error-free and maintainable with TypeScript. My skills include type annotations, interfaces, generics, and advanced type patterns that improve code quality and developer experience.",
      image: typeImg,
      points: [
        "Type Annotations & Interfaces",
        "Advanced Type Patterns",
        "Type-Safe APIs",
        "React + TypeScript",
        "Tooling Integration",
      ],
    },
    {
      title: "API Integration",
      description:
        "I excel at integrating RESTful APIs for seamless data retrieval and interaction, enabling efficient communication between software components for reliable applications.",
      image: api,
      points: [
        "RESTful API Design",
        "Axios/Fetch Implementation",
        "Authentication (JWT/OAuth)",
        "GraphQL Experience",
        "WebSocket Integration",
      ],
    },
    {
      title: "Version Control",
      description:
        "Proficient in Git workflows that ensure seamless collaboration and effective code management across teams of any size.",
      image: git,
      points: [
        "Git Branching Strategies",
        "Code Review Workflows",
        "Conflict Resolution",
        "CI/CD Integration",
        "GitHub/GitLab/Bitbucket",
      ],
    },
  ];

  const qualities = [
    {
      title: "Hard Working",
      description:
        "Dedicated to meeting project goals with unwavering commitment and attention to detail.",
    },
    {
      title: "Collaborative",
      description:
        "Thrive in team environments, valuing diverse perspectives to foster innovation.",
    },
    {
      title: "Problem Solver",
      description:
        "Proactive approach to solving complex challenges with creative solutions.",
    },
    {
      title: "Effective Communicator",
      description:
        "Clear articulation of technical concepts to both technical and non-technical stakeholders.",
    },
    {
      title: "Adaptable",
      description:
        "Quick to learn new technologies and adapt to evolving project requirements.",
    },
    {
      title: "User-Focused",
      description:
        "Passionate about creating intuitive, accessible experiences for end users.",
    },
  ];

  return (
    <div
      className={`${styles.container} ${
        colorMode === "dark" ? styles.dark : styles.light
      }`}
    >
      <section className={styles.hero}>
        <h1 data-aos="fade-down">
          My <span className={styles.highlight}>Skills</span> & Expertise
        </h1>
        <p data-aos="fade-up" data-aos-delay="100">
          As a passionate <span className={styles.accent}>web developer</span>,
          I combine technical expertise with creative problem-solving to build
          exceptional digital experiences. Here's what I bring to your project:
        </p>
      </section>

      <section className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles.skillContent}>
              <h3>
                <span className={styles.number}>0{index + 1}.</span>{" "}
                {skill.title}
              </h3>
              <p>{skill.description}</p>
              <ul className={styles.skillList}>
                {skill.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillImage}>
              <img
                src={skill.image}
                alt={skill.title}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </section>

      <section className={styles.qualities} data-aos="fade-up">
        <h2>
          Professional <span className={styles.highlight}>Qualities</span>
        </h2>
        <div className={styles.qualitiesGrid}>
          {qualities.map((quality, index) => (
            <div
              key={index}
              className={styles.qualityCard}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <h4>{quality.title}</h4>
              <p>{quality.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.collaborationImage}>
          <img src={colla} alt="Collaboration" className={styles.image} />
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
