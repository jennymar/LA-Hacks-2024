import React from "react";
import styles from "./RecipeCard.module.css";

export interface RecipeProps {
  name: string;
  time: number;
  ingredients: string[];
  steps: string[];
  impact: string;
}
export default function RecipeCard({
  name,
  time,
  ingredients,
  steps,
  impact,
}: RecipeProps) {
  return (
    <div className={styles.card}>
      <div className={styles.recipeName}>
        <div className={styles.header}>{name}</div>
        <div className={styles.time}>{time}</div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.subheader}>Ingredients List</div>
          <div>{ingredients}</div>
        </div>

        <div className={styles.col}>
          <div className={styles.subheader}>Steps</div>
          <div>{steps}</div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.subheader}>Environmental Impact</div>
        <div>{impact}</div>
      </div>
    </div>
  );
}
