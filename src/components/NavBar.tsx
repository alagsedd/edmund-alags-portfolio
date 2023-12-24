import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaInfo } from "react-icons/fa6";
import { GiSuitcase } from "react-icons/gi";
import { MdOutlineVerified } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import ColorModeSwitch from "../ChakraUI/ColorModeSwitch";

const NavBar = () => {
  const [showDropMenu, setDropMenu] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <>
      <nav
        style={{
          backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
          color: `${colorMode === "light" ? "#6a7286" : "#fff"}`,
        }}
        className={styles.nav}
      >
        <div className={styles.brandNameBox}>
          <span
            style={{
              color: `${colorMode === "light" ? "#49719c" : " #fff"}`,
            }}
          >
            Alags
          </span>
        </div>

        <ul className={styles.horizontalUl}>
          <li>
            <Link className={styles.link} to={"/"}>
              <FaHome className={styles.icon} size="20" /> Home
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"/skills"}>
              <GiSkills className={styles.icon} size="20" /> Skills
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"/about"}>
              <FaInfo className={styles.icon} size="20" /> About me
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"/projects"}>
              <GiSuitcase className={styles.icon} size="20" /> Projects
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"/certifications"}>
              <MdOutlineVerified className={styles.icon} /> Certifications
            </Link>
          </li>
        </ul>

        <div className={styles.menuBox}>
          {showDropMenu ? (
            <IoIosCloseCircle
              className={styles.icon}
              onClick={() => setDropMenu(false)}
              size="25"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setDropMenu(true)}
              className={styles.icon}
              size="25"
            />
          )}
        </div>
      </nav>

      {showDropMenu && (
        <ul
          style={{
            backgroundColor: `${colorMode === "light" ? "#e0e0e0" : "#1f3042"}`,
            color: `${colorMode === "light" ? "#6a7286" : "#fff"}`,
          }}
          className={styles.verticalUl}
        >
          <li>
            <Link className={styles.link} to={"/"}>
              <FaHome className={styles.icon} /> Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/skills"}>
              <GiSkills className={styles.icon} /> Skills
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/about"}>
              <FaInfo className={styles.icon} /> About me
            </Link>
          </li>

          {/* <li>
            <Link className={styles.link} to={"/projects"}>
              <GiSuitcase className={styles.icon} /> Projects
            </Link>
          </li> */}

          <li>
            <Link className={styles.link} to={"/projects"}>
              Projects
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"/certifications"}>
              <MdOutlineVerified className={styles.icon} /> Certifications
            </Link>
          </li>
        </ul>
      )}

      <ColorModeSwitch />
    </>
  );
};

export default NavBar;
