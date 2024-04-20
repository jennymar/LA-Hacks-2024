"use client";
import { useChat } from "ai/react";
import Image from "next/image";

export default function Home() {
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
    return (
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(event, {
              data: {
                prompt: input,
                type: "ingredients",
              },
            });
          }}
          className="w-full flex flex-row gap-2 items-center h-full"
        >
          <input
            type="text"
            placeholder={
              isLoading ? "Generating . . ." : "enter an ingredient. . . "
            }
            value={input}
            disabled={isLoading}
            onChange={handleInputChange}
          />
          <button
            onClick={stop}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          ></button>
        </form>
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
