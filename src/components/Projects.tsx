import styles from "../styles/Projects.module.css";
import v1 from "../assets/videos/game-demo vid.mp4";
import v2 from "../assets/videos/movie-app.mp4";
import v3 from "../assets/videos/advice finished.mp4";
import v4 from "../assets/videos/news finished.mp4";
import v5 from "../assets/videos/chat demo.mp4";
import v6 from "../assets/videos/sneaker vid.mp4";
import v7 from "../assets/videos/bike-video.mp4";
import gameposter from "../assets/images/game poster.png";
import chatposter from "../assets/images/chat pic.avif";
import bikesAppPoster from "../assets/images/bikes-app-poster.png";
import movieposter from "../assets/images/movie-poster.jpg";
import foodposter from "../assets/images/pngtree-fried-chicken-wings-on-a-black-plate-picture-image_2662983.jpg";
import foodapp from "../assets/videos/food app demo.mp4";
import adviceposter from "../assets/images/advice-poster.jpg";
import signupPoster from "../assets/images/sign-up-poster.jpg";
import sneakerposter from "../assets/images/sneaker poster .jpeg";
import ProjectCard from "../cards/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const Projects = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quad",
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "1. Game App Project",
      details:
        "Explore a world of interactive gaming with my latest project, the Game App! This application represents a culmination of my expertise in web development, utilizing technologies such as React, TypeScript, and RESTful API integration to create an immersive gaming experience.",
      video: v1,
      linkToGame: "https://game-discovery-app-gamma.vercel.app/",
      poster: gameposter,
    },
    {
      id: 2,
      title: "2. Movie App Project",
      details:
        "The Movie App project showcases my technical skills and dedication to creating captivating applications for users. It offers a seamless movie-watching experience, whether you're a cinephile looking for the latest releases or a developer interested in best practices. This project highlights my commitment to innovation and excellence.",
      video: v2,
      linkToGame: "https://movie-discovery-8iemdc5w1-alagsedd.vercel.app/",
      poster: movieposter,
    },
    {
      id: 3,
      title: "3. Advice Generator App Project",
      details:
        "Introducing the Advice App, a testament to my passion for web development and my commitment to creating interactive and user-centric applications. This project is a result of combining RESTful API integration, responsive design, and the use of cutting-edge libraries to provide valuable insights and guidance in an accessible and engaging manner.",
      video: v3,
      linkToGame: "https://advice-generator-app-brown-ten.vercel.app/",
      poster: adviceposter,
    },
    {
      id: 4,
      title: "4. Sign Up Form",
      details:
        "In the realm of web development, creating an intuitive and user-friendly sign-up form is a quintessential skill. My Responsive Sign-Up Form project is a testament to my proficiency in harnessing the power of React hooks to craft an engaging and adaptable form that caters to both desktop and mobile users.",
      video: v4,
      linkToGame: "https://newsletter-signup-form-orcin.vercel.app/",
      poster: signupPoster,
    },
    {
      id: 5,
      title: "5. Food App",
      details:
        "This is a responsive food web app I created with modern technologies.",
      video: foodapp,
      linkToGame: "https://food-app-rosy-five.vercel.app/",
      poster: foodposter,
    },
    {
      id: 6,
      title: "6. Modern Chat Application",
      details:
        "The Modern Chat Application is a cutting-edge, real-time messaging platform designed to foster seamless communication and connectivity among users. Utilizing Firebase Authentication, this application ensures a secure and streamlined sign-in process, prioritizing user privacy and data protection.",
      video: v5,
      linkToGame: "https://chat-app-murex-one.vercel.app/",
      poster: chatposter,
    },
    {
      id: 7,
      title: "7. Sneaker E-commerce",
      details:
        "A responsive sneaker app with modern design and smooth user experience.",
      video: v6,
      linkToGame: "https://sneaker-ecommerce-app-sooty.vercel.app/",
      poster: sneakerposter,
    },
    {
      id: 8,
      title: "8. Bike E-commerce App",
      details:
        "This is a passion project on two wheels: a fully responsive bikes ecommerce app built with React and secured by Firebase. Glide through curated bikes, refine your search with powerful filters, and checkout with a click, all wrapped in a sleek, modern interface.",
      video: v7,
      linkToGame: "https://alags-bikes.vercel.app/",
      poster: bikesAppPoster,
    },
    {
      id: 9,
      title: "9. Medical Lab App",
      details:
        "Presenting an agile web application leveraging Firebase's robust backend, enabling streamlined user authentication, hassle-free signup/login experiences, and secure data handling. This app ensures seamless registration and login functionalities.",
      video: v7,
      linkToGame: "https://alagpulinsa-lab.vercel.app/",
      poster: bikesAppPoster,
    },
  ];

  return (
    <div
      className={`${styles.portfolio} ${
        colorMode === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.hero}>
        <h1 className={styles.title} data-aos="fade-down">
          My <span className={styles.highlight}>Projects</span>
        </h1>
        <p
          className={styles.subtitle}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Crafting digital experiences that inspire and engage
        </p>
      </div>

      <div className={styles.intro} data-aos="fade-up">
        <div className={styles.introContent}>
          <p>
            Welcome to my creative playground. Each project represents countless
            hours of passion, problem-solving, and pixel-perfect attention to
            detail. From sleek e-commerce solutions to immersive web apps, I
            blend cutting-edge technology with elegant design to deliver
            exceptional user experiences.
          </p>
          <div
            className={styles.scrollHint}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>Explore my work</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            colorMode={colorMode}
          />
        ))}
      </div>

      <div className={styles.ctaSection} data-aos="fade-up">
        <h2>Ready to create something amazing together?</h2>
        <button className={styles.ctaButton}>Let's Connect</button>
      </div>
    </div>
  );
};

export default Projects;
