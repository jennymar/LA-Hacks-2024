import React from "react";
import styles from "./RecipeCard.module.css";

export interface RecipeProps {
  name: string;
  hrs: number;
  min: number;
  ingredients: string[];
  steps: string[];
  impact: string;
}
export default function RecipeCard({
  name,
  hrs,
  min,
  ingredients,
  steps,
  impact,
}: RecipeProps) {
  return (
    <div className={styles.card}>
      <div className={styles.recipeName}>
        <div className={styles.header}>{name}</div>
        <div className={styles.time}>
          {hrs} hrs, {min} min
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.subheader}>Ingredients List</div>
          <p className={styles.content}>{ingredients}</p>
        </div>

        <div className={styles.col}>
          <div className={styles.subheader}>Steps</div>
          <p className={styles.content}>{steps}</p>
        </div>
      </div>
      <div className={styles.header}>Environmental Impact</div>
      <p>{impact}</p>
    </div>
  );
}
