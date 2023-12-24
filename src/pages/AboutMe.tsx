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
    AOS.init();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
        }}
        className={styles.parent}
      >
        <div data-aos="fade-right" className={styles.partOne}>
          <h1 className={styles.headerOne}>
            <span>About me</span>
          </h1>
          <p className={styles.p1}>
            My name is <span className={styles.color}>Edmund Alagpulinsa</span>{" "}
            and i'm a dedicated and self driven web developer with 3 years of
            experience.
          </p>
          <img
            src={edd2}
            alt="Your browser doesn't support this image"
            className={styles.image}
          />
          <p className={styles.p1}>
            {" "}
            My passion for <span className={styles.color}>
              web development
            </span>{" "}
            has led me to work on a diverse range of projects from simple login
            forms to complex game-discovery-apps, movie-apps and many more
            projects.
          </p>
        </div>

        <div data-aos="fade-left" className={styles.partTwo}>
          <h2 className={styles.headerTwo}>
            <span>My expertise includes</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              **<span className={styles.color}>React.js</span>**: I am highly
              skilled in developing dynamic and interactive web applications
              using React.js. I have experience in creating reusable components,
              state management, and optimizing performance to deliver
              exceptional user experiences.
            </li>
            <li>
              **<span className={styles.color}>JavaScript</span>**: I have a
              deep understanding of JavaScript and its ecosystem. I can write
              clean and efficient code, work with asynchronous operations, and
              leverage modern ES6+ features to build robust web applications.
            </li>
            <li>
              **<span className={styles.color}>HTML & CSS</span>**: I am
              proficient in crafting well-structured and semantically correct
              HTML documents. I can style web applications using CSS to create
              visually appealing and responsive user interfaces. I ensure
              cross-browser compatibility and adherence to web standards.
            </li>
            <li>
              **<span className={styles.color}>Python</span>**: I have a strong
              background in Python, enabling me to build versatile applications,
              automate tasks, and work with data analysis and machine learning
              libraries. I write clean and maintainable Python code that follows
              best practices.
            </li>
          </ul>
          <p className={styles.p1}>
            I am <span className={styles.color}>committed</span> to staying at
            the forefront of [Your Industry] trends and technologies. As a [Your
            Profession], I am constantly seeking opportunities for growth and
            innovation.
          </p>
        </div>

        <div data-aos="fade-up-right" className={styles.partThree}>
          <h3 className={styles.headerTwo}>
            <span>Why Work with Me?</span>
          </h3>
          <img
            src={trust}
            alt="Your browser doesn't support this image"
            className={styles.image}
          />
          <ul className={styles.ul}>
            <li>
              {" "}
              I am dedicated to delivering high-quality results on time and
              within budget.
            </li>
            <li>
              {" "}
              I have a track record of collaborating effectively with
              cross-functional teams.
            </li>
            <li> I thrive in dynamic and challenging environments.</li>
            <li>I can work under any kind of pressure.</li>
          </ul>
        </div>

        <div data-aos="flip-left" className={styles.partFour}>
          <h3 className={styles.headerTwo}>
            <span>Get in touch</span>
          </h3>
          <p className={styles.p1}>
            If you're interested in collaborating on [Type of Projects or
            Goals], I'd love to connect and explore how I can contribute to your
            success. Let's start a conversation.
          </p>
          <p className={styles.p1}>
            You can reach me{" "}
            <span className={styles.color}>alagsedd@gmail.com</span> or connect
            with me on{" "}
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/alags-edd-b83b6128a/"}
            >
              linkedin
            </Link>
            .
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className={styles.p1}
          >
            Thank you for considering me as a potential partner or team member.
            I look forward to the opportunity to work together.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
