import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItem}>Home</div>{" "}
      <div className={styles.navbarItem}>Cook</div>{" "}
      <div className={styles.navbarItem}>About</div>
    </div>
  );
};

export default NavBar;
