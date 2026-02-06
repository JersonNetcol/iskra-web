import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "AI not configured" },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.6,
    });

    return NextResponse.json({
      message: completion.choices[0].message,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Chat error" },
      { status: 500 }
    );
  }
}
