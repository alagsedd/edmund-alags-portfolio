import styles from "../styles/NavBar.module.css";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const screenWidth = window.innerWidth;

  console.log(`Screen Width: ${screenWidth}px`);
  return (
    <nav className={styles.nav}>
      <div className={styles.logoBox}>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo of Alag's brand"
            className={styles.logoImage}
          />
        </Link>
      </div>

      <div className={styles.brandNameBox}>
        <span className={styles.brandName}>Alags</span>
      </div>

      <div className={styles.menuContainer}>
        {menuVisible && screenWidth <= 600 ? (
          <ul className={styles.ul}>
            <li>
              <AiFillCloseCircle
                onClick={() => {
                  setMenuVisible(false);
                }}
                size="30"
              />
            </li>
            <li>
              <Link className={styles.link} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"/skills"}>
                Skills
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"/about"}>
                About me
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"/projects"}>
                Projects
              </Link>
            </li>
          </ul>
        ) : (
          <div className={styles.menu}>
            <GiHamburgerMenu
              className={styles.menu}
              onClick={() => {
                setMenuVisible(true);
              }}
              size="30"
            />
          </div>
        )}

        <ul className={styles.ul2}>
          <li>
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/skills"}>
              Skills
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/about"}>
              About me
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/projects"}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
