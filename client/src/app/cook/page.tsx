import React from "react";
import styles from "@/app/cook/page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
                  <textarea
                    className={styles.ingredients}
                    placeholder="What do you have in your pantry..."
                  />
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
                    <input className={styles.timeInput} placeholder="hr" />
                    <input className={styles.timeInput} placeholder="min" />
                  </div>

                  <div className={styles.detailsSectionCol}>
                    <div className={styles.detailsLabel}>
                      Dietary Restrictions:
                    </div>
                  </div>
                  <textarea
                    className={styles.dietInput}
                    placeholder="Do you have any dietary restrictions..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.backButton}>&larr; &nbsp; Back</button>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>
      </>
    </main>
  );
}
