import React from "react";
import styles from "./NavBar.module.css";

type NavBarProps = {
  page?: "home" | "cook" | "about";
};

const NavBar = ({ page }: NavBarProps) => {
  return (
    <div className={styles.navbar}>
      <a className={styles.navbarItem} href="/home">
        Home
      </a>
      <a className={styles.navbarItem} href="/cook">
        Cook
      </a>
      <a className={styles.navbarItem} href="/about">
        About
      </a>
    </div>
  );
};

export default NavBar;
