"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/cook/page.module.css";
import NavBar from "@/components/NavBar";
import { useChat } from "ai/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

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

    useEffect(() => {
      console.log("ingredients: ", ingredients);
      console.log("hour: ", hour);
      console.log("min: ", min);
      console.log("dietRes: ", dietRes);
    });

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
              <div className={styles.buttonRow}>
                <button className={styles.backButton}>
                  &larr; &nbsp; Back
                </button>
                <Link href={"/recipe"}>
                  <button className={styles.submitButton} onClick={stop}>
                    <div className={styles.submitText}>Submit</div>
                  </button>
                </Link>
              </div>
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
      return (
        <div
          id="chatbox"
          className="flex flex-col w-full text-left mt-4 gap-4 whitespace-pre-wrap"
        >
          <div> Title: {parsedContent.title}</div>
          <div> Time: {parsedContent.time}</div>
          <div> Ingredients: </div>
          <ul>
            {parsedContent.ingredients.map((ingredient: any, index: number) => (
              <li key={index}>
                {ingredient.amountofunit}
                {SPACE}
                {ingredient.ingredient}
              </li>
            ))}
          </ul>
          <div> Steps: </div>
          <ol>
            {parsedContent.steps.map((step: any, index: number) => (
              <li key={index}>{step.description}</li>
            ))}
          </ol>
        </div>
      );
    }
  }
}
