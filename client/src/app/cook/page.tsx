import React from "react";
import styles from "@/app/cook/page.module.css";
import NavBar from "@/components/NavBar";

export default function Cook() {
  return (
    <main className={styles.page}>
      <>
        <div className={styles.container}>
          <NavBar />
          <div className={styles.detailsContainer}>
            <div className={styles.header}>Let's get cooking...</div>
            <div className={styles.detailsRow}>
              <div className={styles.detailsCol}>
                <div className={styles.detailsSectionCol}>
                  <div className={styles.detailsLabel}>Ingredients List</div>
                  <input className={styles.ingredients} />
                </div>
              </div>
              <div className={styles.detailsCol}>
                <div className={styles.detailsSectionCol}>
                  <div className={styles.detailsLabel}>Meal Type:</div>
                  <div className={styles.mealRow}>
                    <button className={styles.mealButton}>Breakfast</button>
                    <button className={styles.mealButton}>Lunch</button>
                    <button className={styles.mealButton}>Dinner</button>
                    <button className={styles.mealButton}>Snack</button>
                    <button className={styles.mealButton}>Dessert</button>
                  </div>
                </div>
                <div className={styles.detailsSectionCol}>
                  <div className={styles.detailsLabel}>Time:</div>
                  <div className={styles.timeRow}>
                    <input className={styles.timeInput} />
                    <input className={styles.timeInput} />
                  </div>
                </div>
                <div className={styles.detailsSectionCol}>
                  <div className={styles.detailsLabel}>
                    Dietary Restrictions:
                  </div>
                  <input className={styles.dietInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
