import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  console.log(reqBody);

  var prompt = "";

  if (reqBody.data.type === "ingredients") {
    prompt =
      "Please return JSON describing the title, time, ingredients, and steps from a recipe made from the following ingredients: " +
      reqBody.data.prompt +
      '. {"title": str, "time": str, "ingredients": list[INGREDIENT], "steps": list[STEP]} INGREDIENT = {"name": str} STEP = {"description": str}';
    //"I have a list of ingredients and I want to make a recipe from the following: " +
    //reqBody.data.prompt +
    //". Give me a recipe using these ingredients and show me the steps and time it would take.  ";
  } else {
    prompt = "";
  }

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const streamingResponse = await model.generateContentStream(prompt);
  // console.log("response: ", streamingResponse);
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}
