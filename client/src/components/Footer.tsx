import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <main
      className={styles.page}
      style={{
        backgroundImage: `url(${"./footer.svg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <>
        <div className={styles.main}>
          <div className={styles.page_names_row}>
            <a className={styles.page_names} href="/home">
              Home
            </a>
            <a className={styles.page_names} href="/cook">
              Cook
            </a>
            <a className={styles.page_names} href="/about">
              About
            </a>
          </div>
          <div className={styles.note}>Made with ❤️ at LA Hacks</div>
        </div>
      </>
    </main>
  );
};

export default Footer;
