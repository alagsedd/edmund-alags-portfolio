import styles from "../styles/Certifications.module.css";
import c1 from "../assets/certs/cert1.png";
import c2 from "../assets/certs/cert2.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const Certifications = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.cert1}>
          <img
            src={c1}
            alt="Your browser doesn't support this image"
            className={styles.image}
          />
          <a download href="/src/assets/certs/1-react-18-for-beginners.pdf">
            <Button
              colorScheme="telegram"
              leftIcon={<FaCloudDownloadAlt />}
              variant="solid"
            >
              Download Certificate
            </Button>
          </a>
        </div>

        <div className={styles.cert2}>
          <img
            src={c2}
            alt="Your browser doesn't support this image"
            className={styles.image}
          />
          <a
            download
            href="/src/assets/certs/certificate-of-completion-for-react-18-for-beginners.pdf"
          >
            <Button
              colorScheme="telegram"
              leftIcon={<FaCloudDownloadAlt />}
              variant="solid"
            >
              Download Certificate
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Certifications;
