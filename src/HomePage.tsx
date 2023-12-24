import styles from "../src/styles/HomePage.module.css";
import edd from "../src/assets/images/edd.jpeg";
import skillspic from "../src/assets/images/skills-pic.jpg";
import reality from "../src/assets/images/reality-pic.jpg";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useColorMode } from "@chakra-ui/react";

const HomePage = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div
          style={{
            backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
          }}
          data-aos="fade-right"
          className={styles.devInfo}
        >
          <span
            style={{
              color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
            }}
          >
            I am Edmund, a Web developer.
          </span>{" "}
          <p
            style={{
              color: `${colorMode === "light" ? "#6a7286" : " #9aacc6"}`,
            }}
          >
            I have a specialization in web development, and this website serves
            as a comprehensive representation of my skills and experiences. I
            encourage you to explore each section to gain a full understanding
            of my capabilities.{" "}
          </p>
          <Link className={styles.link} to={"projects"}>
            view my projects now
          </Link>
        </div>

        <div className={styles.motherMotherPicBox}>
          <div
            style={{
              boxShadow: `${
                colorMode === "light" ? "0 0 3px #808993" : "0 0 10px aqua"
              }`,
            }}
            className={styles.picBox}
          >
            <img
              src={edd}
              alt="A photo of myself"
              className={styles.imageOne}
            />
          </div>
        </div>

        <div data-aos="fade-left" className={styles.skillsSum}>
          <div
            style={{
              backgroundColor: `${
                colorMode === "light" ? "#e0e0e0" : "#1f3042"
              }`,
            }}
            className={styles.skillsCard}
          >
            <span
              style={{
                color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
              }}
            >
              My skills...
            </span>
            <p
              style={{
                color: `${colorMode === "light" ? "#6a7286" : " #9aacc6"}`,
              }}
            >
              I possess strong expertise in a range of programming languages and
              technologies, including React, TypeScript, JavaScript, and
              Python...{" "}
              <Link className={styles.link} to={"skills"}>
                Read more
              </Link>{" "}
            </p>{" "}
          </div>
          <img
            src={skillspic}
            alt="Your browser doesn't support this image"
            className={styles.skillsSumPic}
          />
        </div>

        <div
          style={{
            backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
          }}
          data-aos="fade-up-right"
          className={styles.convinceBox}
        >
          <span
            style={{
              color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
            }}
          >
            {" "}
            Let's Make Your Ideas a Reality:
          </span>
          <p
            style={{
              color: `${colorMode === "light" ? "#6a7286" : " #9aacc6"}`,
            }}
          >
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

        <div
          style={{
            backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
          }}
          data-aos="fade-up-left"
          className={styles.achievementsBox}
        >
          <span
            style={{
              color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
            }}
          >
            Achievements and Certifications:
          </span>
          <p
            style={{
              color: `${colorMode === "light" ? "#6a7286" : " #9aacc6"}`,
            }}
          >
            <strong>CodeWithMosh Certifications</strong>: Completed multiple
            courses on CodeWithMosh, including Python, HTML & CSS, React and
            Javascript. View Certificates.
          </p>
        </div>

        <div
          style={{
            backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
          }}
          className={styles.fastContactBox}
        >
          <span
            style={{
              color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
            }}
          >
            Contact me
          </span>
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
    </>
  );
};

export default HomePage;
