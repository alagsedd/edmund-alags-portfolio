import styles from "../styles/AboutMe.module.css";
import edd2 from "../assets/images/edd2.jpeg";
import trust from "../assets/images/trust-pic.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const AboutMe = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

return (
    <div
      className={`${styles.container} ${
        colorMode === "dark" ? styles.dark : ""
      }`}
    >
      {/* Hero Section */}
      <section className={styles.heroSection} data-aos="fade-up">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            About <span className={styles.highlight}>Me</span>
          </h1>
          <div className={styles.profileWrapper}>
            <img
              src={edd2}
              alt="Edmund Alagpulinsa"
              className={styles.profileImage}
            />
          </div>
          <p className={styles.heroText}>
            My name is{" "}
            <span className={styles.highlight}>Edmund Alagpulinsa</span> and I'm
            a dedicated and self-driven web developer with 3 years of
            experience.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.section} data-aos="fade-up">
        <div className={styles.sectionContent}>
          <p className={styles.sectionText}>
            My passion for{" "}
            <span className={styles.highlight}>web development</span> has led me
            to work on a diverse range of projects from simple login forms to
            complex game-discovery-apps, movie-apps and many more projects.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.sectionAlt} data-aos="fade-up">
        <h2 className={styles.sectionTitle}>My Expertise</h2>
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>React.js</h3>
            <p className={styles.expertiseText}>
              Highly skilled in developing dynamic and interactive web
              applications using React.js. Experienced in creating reusable
              components, state management, and optimizing performance.
            </p>
          </div>
          <div className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>JavaScript</h3>
            <p className={styles.expertiseText}>
              Deep understanding of JavaScript and its ecosystem. I write clean,
              efficient code, work with asynchronous operations, and leverage
              modern ES6+ features to build robust applications.
            </p>
          </div>
          <div className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>HTML & CSS</h3>
            <p className={styles.expertiseText}>
              Proficient in crafting well-structured HTML and styling with CSS
              to create visually appealing, responsive interfaces with
              cross-browser compatibility and adherence to web standards.
            </p>
          </div>
          <div className={styles.expertiseCard}>
            <h3 className={styles.expertiseTitle}>Python</h3>
            <p className={styles.expertiseText}>
              Strong background in Python for building versatile applications,
              automating tasks, and working with data analysis and machine
              learning libraries. I follow best practices for clean,
              maintainable code.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className={styles.section} data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Why Work With Me?</h2>
        <div className={styles.trustContent}>
          <img
            src={trust}
            alt="Trust illustration"
            className={styles.trustImage}
          />
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              Dedicated to delivering high-quality results on time and within
              budget
            </li>
            <li className={styles.benefitItem}>
              Track record of collaborating effectively with cross-functional
              teams
            </li>
            <li className={styles.benefitItem}>
              Thrive in dynamic and challenging environments
            </li>
            <li className={styles.benefitItem}>
              Can work effectively under pressure
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.contactText}>
          If you're interested in collaborating on projects, I'd love to connect
          and explore how I can contribute to your success. Let's start a
          conversation.
        </p>
        <p className={styles.contactText}>
          You can reach me at{" "}
          <span className={styles.highlight}>alagsedd@gmail.com</span>
          or connect with me on{" "}
          <Link
            to="https://www.linkedin.com/in/alags-edd-b83b6128a/"
            target="_blank"
            className={styles.contactLink}
          >
            LinkedIn
          </Link>
          .
        </p>
        <p className={styles.contactClosing}>
          Thank you for considering me as a potential partner or team member. I
          look forward to the opportunity to work together.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
