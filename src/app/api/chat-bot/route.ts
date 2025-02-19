import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

// console.log(apiKey);
if (!apiKey) {
	throw new Error("GEMINI_API_KEY is not defined");
}
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "tunedModels/jaycon-model-xjbcqcadwdd",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
};

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { message } = body;

		// Call Gemini API
		const botResponse = await fetchGeminiResponse(message);

		// Send response to frontend
		return NextResponse.json({ botReply: botResponse }, { status: 200 });
	} catch (error) {
		console.error("Error calling Gemini API:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

// Function to call Gemini API
async function fetchGeminiResponse(userMessage: string) {
	try {
		const chatSession = model.startChat({
			generationConfig,
			history: [],
		});

		const result = await chatSession.sendMessage(userMessage);
		return result.response.text();
	} catch (error) {
		console.error("Error fetching Gemini API response:", error);
		return "I'm sorry, I couldn't understand that.";
	}
}
