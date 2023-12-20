import { Link } from "react-router-dom";
import styles from "../styles/ProjectCard.module.css";
import ExpandableText from "../components/ExpandableText";

interface Props {
  title: string;
  video: string;
  poster: string;
  details: string;
  linkToGame: string;
}
const ProjectCard = ({ details, title, video, poster, linkToGame }: Props) => {
  return (
    <div className={styles.card}>
      <video
        poster={poster}
        controls
        src={video}
        className={styles.video}
      ></video>

      <div className={styles.info}>
        <span className={styles.title}>{title}</span>

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
