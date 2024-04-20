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
    return (
      <div
        id="chatbox"
        className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 shadow-md rounded-md ml-10 relative ${
              message.role === "user" ? "bg-stone-300" : ""
            }`}
          >
            {message.content}
          </div>
        ))}

        {/* {messages.map((message, index) => {
          // Parse the content of the message
          console.log("message.content: ", message.content);

          // Check if the role of the message is "assistant"
          if (message.role === "assistant") {
            // Render the title if the role is "assistant"

            const parsedContent = JSON.parse(message.content);
            return (
              <div
                key={index}
                className={`p-4 shadow-md rounded-md ml-10 relative`}
              >
                {parsedContent.title}
              </div>
            );
          } else {
            // Return null if the role is "user" to skip rendering this message
            return null;
          }
        })} */}
      </div>
    );
  }
}
