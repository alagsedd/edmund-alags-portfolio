import styles from "../styles/ProjectCard.module.css";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  details: string;
  video: string;
  linkToGame: string;
  poster: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  colorMode: "light" | "dark";
}

const ProjectCard = ({ project, index, colorMode }: ProjectCardProps) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${
        colorMode === "dark" ? styles.dark : styles.light
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.mediaContainer}>
        {isHovered ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className={styles.media}
          />
        ) : (
          <img
            src={project.poster}
            alt={project.title}
            className={styles.media}
          />
        )}
        <div className={styles.overlay}>
          <a
            href={project.linkToGame}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            View Project
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.details}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
