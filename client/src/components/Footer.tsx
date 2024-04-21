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
            <div className={styles.page_names}>Home</div>{" "}
            <div className={styles.page_names}>Cook</div>{" "}
            <div className={styles.page_names}>About</div>
          </div>
          <div className={styles.note}>Made with ❤️ at LA Hacks</div>
        </div>
      </>
    </main>
  );
};

export default Footer;
