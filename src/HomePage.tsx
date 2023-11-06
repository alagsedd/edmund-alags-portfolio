import styles from "../src/styles/HomePage.module.css";
import edd from "../src/assets/images/edd.jpeg";
import skillspic from "../src/assets/images/skills-pic.jpg";
import reality from "../src/assets/images/reality-pic.jpg";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.devInfo}>
        <span>I am Edmund, a Web developer.</span>{" "}
        <p>
          I have a specialization in web development, and this website serves as
          a comprehensive representation of my skills and experiences. I
          encourage you to explore each section to gain a full understanding of
          my capabilities.{" "}
        </p>
      </div>

      <div className={styles.motherMotherPicBox}>
        <div className={styles.picBox}>
          <img src={edd} alt="A photo of myself" className={styles.imageOne} />
        </div>
      </div>

      <div className={styles.skillsSum}>
        <div className={styles.skillsCard}>
          <span>My skills...</span>
          <p>
            I possess strong expertise in a range of programming languages and
            technologies, including React, TypeScript, JavaScript, and Python...{" "}
          </p>{" "}
        </div>
        <img
          src={skillspic}
          alt="Your browser doesn't support this image"
          className={styles.skillsSumPic}
        />
      </div>

      <div className={styles.convinceBox}>
        <span> Let's Make Your Ideas a Reality:</span>
        <p>
          I'm not just a developer; I'm a problem solver, a creative thinker,
          and a dedicated professional. Your project's success is my success,
          and I take pride in delivering web solutions that leave a lasting
          impression. Join the many satisfied clients who have trusted me to
          transform their digital aspirations into reality.Let's sail to
          greatness together.
        </p>

        <img
          src={reality}
          alt="Your browser doesn't support this image"
          className={styles.realityPic}
        />
      </div>

      <div className={styles.achievementsBox}>
        <span>Achievements and Certifications:</span>
        <p>
          <strong>CodeWithMosh Certifications</strong>: Completed multiple
          courses on CodeWithMosh, including Python, HTML & CSS, React and
          Javascript. View Certificates.
        </p>
      </div>

      <div className={styles.fastContactBox}>
        <span>Contact me</span>
        <div className={styles.socialIcons}>
          <Link target="_blank" to={"https://github.com/alagsedd"}>
            <AiFillGithub className={styles.icon} size="25" />
          </Link>

          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/alags-edd-b83b6128a/"}
          >
            <AiFillLinkedin className={styles.icon} size="25" />
          </Link>

          <Link target="_blank" to={"https://www.instagram.com/ed_alags/"}>
            <BsInstagram className={styles.icon} size="25" />
          </Link>

          <Link target="_blank" to={"https://twitter.com/ed_alagss"}>
            <RiTwitterXLine className={styles.icon} size="25" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
