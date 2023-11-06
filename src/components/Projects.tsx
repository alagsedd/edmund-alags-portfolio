import styles from "../styles/Projects.module.css";
import v1 from "../assets/videos/game-app-finished.mp4";
import v2 from "../assets/videos/movie-app.mp4";
import v3 from "../assets/videos/advice finished.mp4";
import v4 from "../assets/videos/news finished.mp4";
import gameposter from "../assets/images/game-poster.jpg";
import movieposter from "../assets/images/movie-poster.jpg";
import adviceposter from "../assets/images/advice-poster.jpg";
import signupPoster from "../assets/images/sign-up-poster.jpg";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: " 1.Game App Project:",
      details:
        "Explore a world of interactive gaming with my latest project, the Game App! This application represents a culmination of my     expertise in web development, utilizing technologies such as React, TypeScript, and RESTful API integration to create an immersive gaming experience.",
      video: v1,
      linkToGame: "https://game-discovery-app-gamma.vercel.app/",
      poster: gameposter,
    },

    {
      id: 2,
      title: "2.Move App Project:",
      details:
        "The Movie App project showcases my technical skills and dedication to creating captivating applications for users. It offers a seamless movie-watching experience, whether you're a cinephile looking for the latest releases or a developer interested in best practices. This project highlights my commitment to innovation and excellence.",
      video: v2,
      linkToGame: "https://movie-discovery-8iemdc5w1-alagsedd.vercel.app/",
      poster: movieposter,
    },
    {
      id: 3,
      title: "3.Advice Generato App Project:",
      details:
        "Introducing the Advice App, a testament to my passion for web development and my commitment to creating interactive and  user-centric applications. This project is a result of combining RESTful API integration, responsive design, and the use of cutting-edge libraries to provide valuable insights and guidance in an accessible and engaging manner.",
      video: v3,
      linkToGame: "https://advice-generator-app-brown-ten.vercel.app/",
      poster: adviceposter,
    },
    {
      id: 4,
      title: "4.Sign up form",
      details:
        "  In the realm of web development, creating an intuitive and   user-friendly sign-up form is a quintessential skill. My Responsive Sign-Up Form project is a testament to my proficiency in harnessing the power of React hooks to craft an engaging and adaptable form that caters to both desktop and mobile users.",
      video: v4,
      linkToGame: "https://newsletter-signup-form-orcin.vercel.app/",
      poster: signupPoster,
    },
  ];
  return (
    <>
      <div className={styles.parent}>
        <h1 className={styles.headerOne}>
          <span>Projects I have worked on</span>
        </h1>

        <div className={styles.introText}>
          <p>
            Welcome to my portfolio of projects! Here, I'm excited to share with
            you some of the work I've done and the projects I've been involved
            in. As a self-taught developer with a passion for creating
            meaningful and impactful solutions, I've had the opportunity to work
            on a variety of projects that showcase my skills and experiences.{" "}
            <br></br>
            Each project represents a unique challenge and an opportunity for
            learning and growth. From web development to mobile apps and more,
            I've had the privilege of working on projects that have honed my
            skills and allowed me to bring ideas to life. I'm a firm believer in
            the power of technology to make a difference, and I'm dedicated to
            creating solutions that are not only functional but also
            user-friendly and visually appealing.
            <br /> I'm excited to take you on a journey through these projects,
            and I hope you find them inspiring and informative. Whether you're a
            fellow developer, a potential client, or simply someone interested
            in the world of tech, I invite you to explore these projects and get
            a glimpse of what I can bring to the table.
          </p>
        </div>
        <h3 className={styles.headerTwo}>
          <span>Hope you like them!</span>
        </h3>
        <div className={styles.projectsBox}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              linkToGame={project.linkToGame}
              poster={project.poster}
              title={project.title}
              video={project.video}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
