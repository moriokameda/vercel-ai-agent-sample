import {streamText} from "ai";
import {openai} from "@ai-sdk/openai";
import {getErrorMessage} from "@ai-sdk/provider";

export const maxDuration = 30;

export const POST = async (request: Request) => {
  // try {
    const {messages} = await request.json();
    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      messages,
    });
    return result.toDataStreamResponse({
      getErrorMessage,
    });
  // } catch (err) {
  //   console.error('API /chat failed:', err);
  //   return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  // }
}
