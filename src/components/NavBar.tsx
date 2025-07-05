import styles from "../styles/NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaHome, FaInfo } from "react-icons/fa";
import { GiSkills, GiSuitcase } from "react-icons/gi";
import { MdOutlineVerified } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ColorModeSwitch from "../ChakraUI/ColorModeSwitch";

const NavBar = () => {
  const [showDropMenu, setDropMenu] = useState(false);
  const { colorMode } = useColorMode();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Skills", path: "/skills", icon: <GiSkills /> },
    { name: "About", path: "/about", icon: <FaInfo /> },
    { name: "Projects", path: "/projects", icon: <GiSuitcase /> },
    {
      name: "Certifications",
      path: "/certifications",
      icon: <MdOutlineVerified />,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showDropMenu) setDropMenu(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDropMenu]);

  // Close dropdown on route change
  useEffect(() => {
    setDropMenu(false);
  }, [location.pathname]);

  return (
    <header
      className={`${styles.header} ${
        colorMode === "dark" ? styles.dark : styles.light
      }`}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span>Alags</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? styles.active : ""}
            >
              <Link to={item.path} className={styles.navLink}>
                <span className={styles.navIcon}>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu}>
          <button
            className={styles.menuButton}
            onClick={(e) => {
              e.stopPropagation();
              setDropMenu(!showDropMenu);
            }}
            aria-label="Toggle menu"
          >
            {showDropMenu ? (
              <IoIosCloseCircle size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {showDropMenu && (
          <div className={styles.dropdownMenu}>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={
                    location.pathname === item.path ? styles.active : ""
                  }
                >
                  <Link to={item.path} className={styles.dropdownLink}>
                    <span className={styles.dropdownIcon}>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.colorModeToggle}>
          <ColorModeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
