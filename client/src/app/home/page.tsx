import React from "react";
import styles from "@/app/home/page.module.css";
import NavBar from "@/components/NavBar";
import { constrainedMemory } from "process";

export default function Landing() {
  return (
    <main
      className={styles.page}
      style={{
        backgroundImage: `url(${"./LandingHero.svg"})`,
        backgroundSize: "contain",
        width: "100%",
        height: "100%",
      }}
    >
      <>
        <div className={styles.container}>
          <NavBar />
          <div className={styles.hero}>
            <div className={styles.header}>Welcome to superswagproject</div>
            <button className={styles.cookButton}>
              Get Cooking &nbsp; &rarr;
            </button>
          </div>
        </div>
      </>
    </main>
  );
}
