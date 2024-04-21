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
    "Please return JSON describing the title, time, a paragraph on environmental impact estimates, ingredients, and steps, from a recipe made from the following ingredients: " +
    reqBody.data.prompt +
    ". I have the time frame of " +
    reqBody.data.hr +
    " hours " +
    reqBody.data.min +
    " min of time. I also have the dietary restrictions of " +
    reqBody.data.dietRes +
    ". The type of dish I would like to make is: " +
    reqBody.data.meal +
    '. Please be in depth in your steps and put the number in front of them. For each of the ingredients listed, specify the amount and unit to be used. For the information about the environmental impact provide an in depth paragraph that is plain text with avoiding * and - on the beneficial impact of avoiding food waste by using estimates to calculate the carbon and water impact on the environment. Use the following schema: {"title": str, "time": str, "environmentalImpact": str, "ingredients": list[INGREDIENT], "steps": list[STEP]}\n INGREDIENT = {"amountofunit": str, "ingredient": str} \n STEP = {"description": str} \n All fields are required. Important: Only return a single piece of valid JSON text.';

  console.log("prompt: ", prompt);
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  console.log("after model");

  const streamingResponse = await model.generateContentStream(prompt);
  console.log("response");
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}