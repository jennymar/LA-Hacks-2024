import React from "react";
import styles from "@/app/recipe/page.module.css";
import NavBar from "@/components/NavBar";
import { constrainedMemory } from "process";

export default function Recipe() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.intro}>your generated recipe...</div>
        <div className={styles.card}>
          <div className={styles.recipeName}>
            <div className={styles.header}>Pesto Panini</div>
            <div className={styles.time}>x hrs x min</div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.subheader}>Ingredients List</div>
              <p className={styles.content}>
                pesto <br></br>chicken <br></br>bread <br></br>cheese <br></br>
                garlic
              </p>
            </div>

            <div className={styles.col}>
              <div className={styles.subheader}>Steps</div>
              <p className={styles.content}>
                1. Preheat a panini grill. <br></br>2. Slice each quarter of
                focaccia bread in half horizontally. Spread each half with
                pesto. Layer bottom halves with equal amounts chicken, bell
                pepper, onion, and cheese. Top with remaining focaccia halves,
                forming 4 sandwiches. <br></br>3. Grill paninis 5 minutes in the
                preheated grill, or until focaccia bread is golden brown and
                cheese is melted.
              </p>
            </div>
          </div>
          {/* <div className={styles.header}>Environmental Impact</div>
          <p>
            With one panini, you reduced your carbon footprint by .... Blurb
            about specific ingredients
          </p> */}
        </div>
      </div>
    </div>
  );
}
