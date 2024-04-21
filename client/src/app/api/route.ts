import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import {
  GenerateContentResult,
  GoogleGenerativeAI,
} from "@google/generative-ai";

export async function POST(req: Request, res: Response) {
  console.log("POST");
  const reqBody = await req.json();
  console.log("reqBody: ", reqBody);

  var prompt = "";

  prompt =
    "Please return JSON describing the title, time, ingredients, and steps from a recipe made from the following ingredients: " +
    reqBody.data.prompt +
    ". I have the time frame of " +
    reqBody.data.hr +
    " hours " +
    reqBody.data.min +
    " min or time. I also have the dietary restrictions of " +
    reqBody.data.dietRes +
    ". " +
    '. Please be in depth in your steps. For each of the ingredients listed, specify the amount and unit to be used. Use the following schema: {"title": str, "time": str, "ingredients": list[INGREDIENT], "steps": list[STEP]}\n INGREDIENT = {"amountofunit": str, "ingredient": str} \n STEP = {"description": str} \n All fields are required. Important: Only returna single piece of valid JSON text.';
  //"I have a list of ingredients and I want to make a recipe from the following: " +
  //reqBody.data.prompt +
  //". Give me a recipe using these ingredients and show me the steps and time it would take.  ";

  console.log("prompt: ", prompt);
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  console.log("after model");

  const streamingResponse = await model.generateContentStream(prompt);
  console.log("response");
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}