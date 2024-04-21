import React from "react";
import styles from "@/app/about/page.module.css";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <main className={styles.page}>
      <>
        <div
          className={styles.overlay}
          style={{
            backgroundImage: `url(${"./LandingHero.svg"})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <div className={styles.container}>
            <NavBar />
            <div className={styles.hero}>
              <div className={styles.heroRow}>
                <div className={styles.heroCol}>
                  <div className={styles.header}>Food Waste Sucks.</div>
                  <div className={styles.heroBody}>
                    <div className={styles.aboutBody}>
                      We aim to motivate people to reduce their food waste by
                      inspiring them with recipes that can be made with
                      ingredients they already have in the fridge and pantry.{" "}
                    </div>
                    <div className={styles.tagline}>Let's get cooking!</div>
                  </div>
                </div>
                <div className={styles.heroCol}>
                  <img src="./about.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.teamCol}>
          <div className={styles.teamHeader}>Meet the Team</div>
          <div className={styles.teamRow}>
            <div className={styles.memberCol}>
              <img src="./nitya.svg" />
              <div className={styles.devName}>Nitya Pillai </div>
              <div>Developer</div>
            </div>
            <div className={styles.memberCol}>
              <img src="./jenny.svg" />
              <div className={styles.devName}>Jenny Mar </div>
              <div>Developer</div>
            </div>
            <div className={styles.memberCol}>
              <img src="./hannah.svg" />
              <div className={styles.devName}>Hannah Coates </div>
              <div>Developer</div>
            </div>
            <div className={styles.memberCol}>
              <img src="./syd.svg" />
              <div className={styles.devName}>Sydney Zhang </div>
              <div>Developer</div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
