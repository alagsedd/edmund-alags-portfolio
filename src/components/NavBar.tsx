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
import { IoIosHome } from "react-icons/io";

const NavBar = () => {
  const [showDropMenu, setDropMenu] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(-1);
  const { colorMode } = useColorMode();

  const listItems = [
    { name: "Home", path: "/", icon: <FaHome className={styles.icon} /> },
    {
      name: "Skills",
      path: "/skills",
      icon: <GiSkills className={styles.icon} />,
    },
    {
      name: "About me",
      path: "/about",
      icon: <FaHome className={styles.icon} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <GiSuitcase className={styles.icon} />,
    },
    {
      name: "Certifications",
      path: "/certifications",
      icon: <MdOutlineVerified className={styles.icon} />,
    },
  ];

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
          {listItems.map((item, index) => (
            <li
              className={
                selectedListItem === index ? styles.selectedItem : undefined
              }
              key={index}
            >
              <Link
                onClick={() => setSelectedListItem(index)}
                className={styles.link}
                to={item.path}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.menuBox}>
          <Link to={"/"}>
            <IoIosHome className={styles.homeIcon} size="25" />
          </Link>
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
            color: `${colorMode === "light" ? " rgb(16, 67, 121)" : "#fff"}`,
          }}
          className={styles.verticalUl}
        >
          {/* <li>
            <Link className={styles.link} to={"/"}>
              <FaHome className={styles.icon} /> Home
            </Link>
          </li> */}
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
