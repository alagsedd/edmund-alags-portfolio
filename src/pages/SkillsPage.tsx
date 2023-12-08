import styles from "../styles/Skills.module.css";
import reactImg from "../assets/images/reactImg.png";
import api from "../assets/images/api.avif";
import typeImg from "../assets/images/typescript.jpg";
import git from "../assets/images/git.png";
import colla from "../assets/images/colla.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SkillsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.body}>
        {" "}
        <h1 data-aos="fade-left" className={styles.headerOne}>
          <span>My skills</span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={styles.introText}
        >
          As a dedicated <span className={styles.color}>web developer</span>{" "}
          with a passion for continuous learning and growth, I bring a unique
          blend of technical skills and qualities that set me apart. My
          proficiency extends to a range of programming languages and
          technologies, enabling me to create exceptional digital experiences.
          Here's a glimpse of what I bring to the table:
        </p>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className={styles.skillOne}
        >
          <div className={styles.two}>
            <span className={styles.skillHeader}>1.React Proficiency:</span>
            <p>
              I have strong proficiency in React, a highly popular JavaScript
              library. I specialize in creating dynamic and user-friendly
              interfaces, ensuring that your web applications are both efficient
              and engaging. My skills in React include: Component-Based
              Architecture State Management Responsive Design Performance
              Optimization Third-Party Integrations With this expertise, I can
              transform your ideas into captivating web solutions that meet and
              exceed user expectations.
            </p>
          </div>
          <div className={styles.imageBox}>
            <img src={reactImg} alt="React image" className={styles.image} />
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className={styles.skillTwo}
        >
          <div className={styles.one}>
            <span className={styles.skillHeader}>
              2.TypeScript Proficiency:
            </span>
            <p>
              I possess strong expertise in TypeScript, a language that
              significantly improves code quality, maintainability, and
              reliability. My TypeScript skills encompass: Type Annotations
              Enhanced Code Readability Stronger Tooling Support Improved
              Collaboration Enhanced Error Detection With my TypeScript
              knowledge, I ensure that your codebase remains error-free and
              easily maintainable, facilitating efficient collaboration and
              high-quality software development.
            </p>
          </div>
          <div className={styles.two}>
            <img
              src={typeImg}
              alt="Typescript image"
              className={styles.image}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={styles.skillOne}
        >
          <div className={styles.two}>
            <span className={styles.skillHeader}>
              3.RESTful API Integration:
            </span>
            <p>
              {" "}
              I excel at integrating RESTful APIs for seamless data retrieval
              and interaction. My expertise in RESTful API integration enables
              efficient communication between various software components,
              resulting in reliable and responsive applications.{" "}
            </p>
          </div>
          <div className={styles.imageBox}>
            <img src={api} alt="React image" className={styles.image} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className={styles.skillTwo}
        >
          <div className={styles.one}>
            <span className={styles.skillHeader}>
              4.TypeScript Proficiency:
            </span>
            <p>
              Git & Version Control: Proficient in Git and version control,
              ensuring seamless collaboration among developers and effective
              code management. Utilizes Git to track changes, manage code
              branches, and facilitate the integration of new features and
              enhancements. Expertise in resolving conflicts and maintaining a
              clean and organized codebase, resulting in efficient and
              error-free software development processes.{" "}
            </p>
          </div>
          <div className={styles.imageBox}>
            <img src={git} alt="Typescript image" className={styles.image} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={styles.skillOne}
        >
          <div className={styles.two}>
            <span className={styles.skillHeader}>Qualities & Attributes:</span>
            <ol style={{ margin: "0.7rem" }}>
              <li>
                Hard Work: A strong work ethic and dedication to meeting project
                goals with unwavering commitment.
              </li>
              <li>
                Collaborative: A team player who thrives in collaborative
                environments, valuing diverse perspectives and fostering
                innovation.
              </li>
              <li>
                Problem-Solver: A proactive approach to solving complex
                challenges, from coding issues to user experience enhancements.
              </li>
              <li>
                Detail-Oriented: Meticulous attention to detail to ensure the
                highest quality of work in every project.
              </li>
              <li>
                Effective Communication: Strong communication skills to
                understand client requirements and deliver exceptional results.
              </li>
              <li>
                Adaptability: Quick adaptability to evolving technologies and a
                commitment to staying updated with industry trends.
              </li>
            </ol>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className={styles.one}
          >
            <img src={colla} alt="React image" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
