import styles from "../src/styles/HomePage.module.css";
import edd from "../src/assets/images/edd.jpeg";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaCode, FaLightbulb, FaAward } from "react-icons/fa";

const HomePage = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  // Color variables
  const backgroundColor = colorMode === "light" ? "#f5f7ff" : "#121a26";
  const cardBackgroundColor = colorMode === "light" ? "#ffffff" : "#1a2236";
  const primaryTextColor = colorMode === "light" ? "#2c3e50" : "#ecf0f1";
  const secondaryTextColor = colorMode === "light" ? "#7f8c8d" : "#bdc3c7";
  const accentColor = colorMode === "light" ? "#3498db" : "#00bcd4";
  const boxShadow =
    colorMode === "light"
      ? "0 4px 15px rgba(0, 0, 0, 0.08)"
      : "0 4px 20px rgba(0, 0, 0, 0.3)";
  const iconColor = colorMode === "light" ? "#3498db" : "#00bcd4";

  return (
    <main className={styles.main} style={{ backgroundColor }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent} data-aos="fade-right">
          <h1 style={{ color: primaryTextColor }}>
            Hi, I'm <span className={styles.highlight}>{`Edmund`}</span>.
          </h1>
          <p style={{ color: secondaryTextColor }}>
            A passionate Web Developer crafting seamless and dynamic user
            experiences. Let's build something amazing together.
          </p>
          <Link to={"projects"}>
            <Button
              size="lg"
              colorScheme="messenger"
              className={styles.projectsButton}
              style={{
                borderColor: accentColor,
                backgroundColor: accentColor,
                color: "#fff",
              }}
            >
              View My Work
            </Button>
          </Link>
        </div>

        <div className={styles.profileImageContainer} data-aos="zoom-in">
          <div
            className={styles.picBox}
            style={{
              boxShadow:
                colorMode === "light"
                  ? "0 0 15px rgba(0, 0, 0, 0.1)"
                  : `0 0 25px ${accentColor}`,
            }}
          >
            <img
              src={edd}
              alt="A photo of Edmund, a Web Developer"
              className={styles.imageOne}
            />
          </div>
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      {/* About/Summary Sections */}
      <section className={styles.infoGrid}>
        <div
          className={styles.infoCard}
          style={{ backgroundColor: cardBackgroundColor, boxShadow }}
          data-aos="fade-up"
        >
          <FaCode
            size={40}
            className={styles.cardIcon}
            style={{ color: iconColor }}
          />
          <h2 style={{ color: primaryTextColor }}>My Skills</h2>
          <p style={{ color: secondaryTextColor }}>
            I excel in modern web technologies including React, TypeScript,
            JavaScript, and Python. I'm committed to building scalable and
            efficient solutions.
            <Link to={"skills"} className={styles.readMoreLink}>
              <Button
                size="sm"
                variant="outline"
                colorScheme="messenger"
                mt={3}
                style={{ borderColor: accentColor, color: accentColor }}
              >
                Learn More
              </Button>
            </Link>
          </p>
        </div>

        <div
          className={styles.infoCard}
          style={{ backgroundColor: cardBackgroundColor, boxShadow }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaLightbulb
            size={40}
            className={styles.cardIcon}
            style={{ color: iconColor }}
          />
          <h2 style={{ color: primaryTextColor }}>Let's Innovate</h2>
          <p style={{ color: secondaryTextColor }}>
            I'm a dedicated problem-solver and creative thinker. My goal is to
            transform your digital aspirations into compelling realities.
          </p>
        </div>

        <div
          className={styles.infoCard}
          style={{ backgroundColor: cardBackgroundColor, boxShadow }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaAward
            size={40}
            className={styles.cardIcon}
            style={{ color: iconColor }}
          />
          <h2 style={{ color: primaryTextColor }}>Achievements</h2>
          <p style={{ color: secondaryTextColor }}>
            CodeWithMosh Certifications: Successfully completed multiple
            advanced courses in Python, HTML & CSS, React, and JavaScript.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={styles.contactSection}
        style={{ backgroundColor: cardBackgroundColor, boxShadow }}
        data-aos="zoom-in-up"
      >
        <h2 style={{ color: primaryTextColor }}>Connect With Me</h2>
        <div className={styles.socialIcons}>
          <Link target="_blank" to={"https://github.com/alagsedd"}>
            <AiFillGithub
              className={styles.icon}
              size="35"
              style={{ color: iconColor }}
            />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/alags-edd-b83b6128a/"}
          >
            <AiFillLinkedin
              className={styles.icon}
              size="35"
              style={{ color: iconColor }}
            />
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/ed_alags/"}>
            <BsInstagram
              className={styles.icon}
              size="35"
              style={{ color: iconColor }}
            />
          </Link>
          <Link target="_blank" to={"https://twitter.com/ed_alagss"}>
            <RiTwitterXLine
              className={styles.icon}
              size="35"
              style={{ color: iconColor }}
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
