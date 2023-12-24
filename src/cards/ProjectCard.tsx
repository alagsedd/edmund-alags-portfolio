import { Link } from "react-router-dom";
import styles from "../styles/ProjectCard.module.css";
import ExpandableText from "../components/ExpandableText";

import { useColorMode } from "@chakra-ui/react";

interface Props {
  title: string;
  video: string;
  poster: string;
  details: string;
  linkToGame: string;
}
const ProjectCard = ({ details, title, video, poster, linkToGame }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.card}>
      <video
        poster={poster}
        controls
        src={video}
        className={styles.video}
      ></video>

      <div className={styles.info}>
        <span
          style={{
            color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
          }}
          className={styles.title}
        >
          {title}
        </span>

        <div>
          <ExpandableText gameDetails={details} />
        </div>

        <p>
          You can preview the site here{" "}
          <Link className={styles.link} to={linkToGame} target="_blank">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
