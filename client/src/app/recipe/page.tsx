import React from "react";
import styles from "@/app/recipe/page.module.css";
import NavBar from "@/components/NavBar";
import RecipeCard from "@/components/RecipeCard";
import { constrainedMemory } from "process";

export default function Recipe() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.intro}>your generated recipe...</div>
        <RecipeCard
          name="Pesto Panini"
          time={5}
          ingredients={["a", "b", "c"]}
          steps={["1", "2", "3"]}
          impact="saving the world"
        />
      </div>
    </div>
  );
}
