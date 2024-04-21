"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/cook/page.module.css";
import NavBar from "@/components/NavBar";
import { useChat } from "ai/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import RecipeCard from "@/components/RecipeCard";

export default function Cook() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api",
    });

  return (
    <main>
      {InputForm()}
      {OutputResponse()}
    </main>
  );

  function InputForm() {
    const [ingredients, setIngredients] = useState<string>();
    const [hour, setHour] = useState<string>();
    const [min, setMin] = useState<string>();
    const [dietRes, setDietRes] = useState<string>();
    const [meal, setMeal] = useState<string>();
    const [clicked, setClicked] = useState<string>("");

    useEffect(() => {
      console.log("ingredients: ", ingredients);
      console.log("hour: ", hour);
      console.log("min: ", min);
      console.log("dietRes: ", dietRes);
      console.log("meal: ", meal);
    });

    const handleMealClick = (stringValue: string) => {
      setMeal(stringValue);
      setClicked(stringValue);
    };

    const handleSubmitClick = () => {
      const currentPathname = window.location.pathname;
      window.location.href = `http://localhost:3000/home`;
    };

    return (
      <main className={styles.page}>
        <>
          <form
            onSubmit={(event) => {
              console.log("onSubmit");
              event.preventDefault();
              handleSubmit(event, {
                data: {
                  prompt: input,
                  ingredients: ingredients as string,
                  hr: hour as string,
                  min: min as string,
                  dietRes: dietRes as string,
                  meal: meal as string,
                },
              });
            }}
          >
            <div className={styles.container}>
              <NavBar />
              <div className={styles.detailsContainer}>
                <div className={styles.header}>Let's get cooking...</div>
                <div className={styles.detailsRow}>
                  <div className={styles.detailsCol}>
                    <div className={styles.detailsSectionCol}>
                      <div className={styles.detailsLabel}>
                        Ingredients List
                      </div>
                      <textarea
                        required
                        className={styles.ingredients}
                        placeholder="What do you have in your pantry..."
                        value={input}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className={styles.detailsCol}>
                    <div className={styles.detailsSectionCol}>
                      <div className={styles.detailsLabel}>Meal Type:</div>
                      <div className={styles.mealRow}>
                        <div
                          className={`${styles.mealButton} ${
                            clicked === "Breakfast" ? styles.clicked : ""
                          }`}
                          onClick={() => handleMealClick("Breakfast")}
                        >
                          Breakfast
                        </div>
                        <div
                          className={`${styles.mealButton} ${
                            clicked === "Lunch" ? styles.clicked : ""
                          }`}
                          onClick={() => handleMealClick("Lunch")}
                        >
                          Lunch
                        </div>
                        <div
                          className={`${styles.mealButton} ${
                            clicked === "Dinner" ? styles.clicked : ""
                          }`}
                          onClick={() => handleMealClick("Dinner")}
                        >
                          Dinner
                        </div>
                        <div
                          className={`${styles.mealButton} ${
                            clicked === "Snack" ? styles.clicked : ""
                          }`}
                          onClick={() => handleMealClick("Snack")}
                        >
                          Snack
                        </div>
                        <div
                          className={`${styles.mealButton} ${
                            clicked === "Dessert" ? styles.clicked : ""
                          }`}
                          onClick={() => handleMealClick("Dessert")}
                        >
                          Dessert
                        </div>
                      </div>
                    </div>
                    <div className={styles.detailsSectionCol}>
                      <div className={styles.detailsLabel}>Time:</div>
                      <div className={styles.timeRow}>
                        <input
                          className={styles.timeInput}
                          placeholder="hr"
                          value={hour}
                          onChange={(e) => setHour(e.target.value)}
                        />
                        <input
                          className={styles.timeInput}
                          placeholder="min"
                          value={min}
                          onChange={(e) => setMin(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={styles.detailsSectionCol}>
                      <div className={styles.detailsLabel}>
                        Dietary Restrictions:
                      </div>

                      <textarea
                        className={styles.dietInput}
                        placeholder="Do you have any dietary restrictions..."
                        value={dietRes}
                        onChange={(e) => setDietRes(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <a onClick={handleSubmitClick}>
                <button className={styles.backButton}>
                  &larr; &nbsp; Back
                </button>
              </a>
              <button className={styles.submitButton}>Submit</button>
            </div>
          </form>
        </>
      </main>
    );
  }

  function OutputResponse() {
    console.log("messages: ", messages);
    if (
      messages &&
      messages[1] &&
      messages[1].content.substring(messages[1].content.length - 2) === "]}"
    ) {
      const parsedContent = JSON.parse(messages[1].content);
      const SPACE = " ";
      console.log("parsedContent.title: ", parsedContent.title);
      console.log("parsedContent.time: ", parsedContent.time);
      console.log("parsedContent.ingredients: ", parsedContent.ingredients);
      console.log("parsedContent.steps: ", parsedContent.steps);

      const ingredientsList = parsedContent.ingredients
        .map(
          (ingredient: { amountofunit: any; ingredient: any }) =>
            `- ${ingredient.amountofunit} ${ingredient.ingredient}`,
        )
        .join("\r\n");
      const stepsList = parsedContent.steps
        .map(
          (step: { description: any }, index: any) =>
            `${index + 1}. ${step.description} `,
        )
        .join("\r\n");

      console.log("ingredientsList: ", ingredientsList);

      return (
        <div className={styles.recipemain}>
          <div className={styles.intro}>your generated recipe...</div>
          <RecipeCard
            name={parsedContent.title}
            time={parsedContent.time}
            ingredients={ingredientsList}
            steps={stepsList}
            impact={parsedContent.environmentalImpact}
          />
        </div>
      );
    }
  }
}
