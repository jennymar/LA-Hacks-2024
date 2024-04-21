import React from "react";
import styles from "@/app/home/page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Landing() {
  return (
    <main
      className={styles.page}
      // style={{
      //   backgroundImage: `url(${"./LandingHero.svg"})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <>
        <div
          className={styles.overlay}
          style={{
            backgroundImage: `url(${"./LandingHero.svg"})`,
            backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            width: "100%",
            // height: "100%",
            height: "auto",
          }}
        >
          <div className={styles.container}>
            <NavBar />
            <div className={styles.hero}>
              <div className={styles.header}>Welcome to superswagproject</div>
              <button className={styles.cookButton}>
                Get Cooking &nbsp; &rarr;
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.missionCol}>
              <p>
                Generate a recipe using ingredients you already have in your
                fridge and pantry to reduce food waste.
              </p>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.firststep}>
              <Image
                src="/icon1.svg"
                alt="Internal Error"
                width={185}
                height={183}
              />{" "}
              <div className={styles.steptext} style={{ color: "#DE6A28" }}>
                1. Input your ingredients
              </div>
            </div>

            <div className={styles.step}>
              <Image
                src="/icon2.svg"
                alt="Internal Error"
                width={248}
                height={244}
              />{" "}
              <div className={styles.steptext} style={{ color: "#5F82B8" }}>
                2. Create recipe
              </div>
            </div>

            <div className={styles.laststep}>
              <Image
                src="/icon3.svg"
                alt="Internal Error"
                width={281}
                height={214}
              />{" "}
              <div className={styles.steptext} style={{ color: "#5b8e69" }}>
                3. Start cooking
              </div>
            </div>
          </div>
        </div>
        {/* </main> */}
        <Footer />
      </>
    </main>
  );
}
