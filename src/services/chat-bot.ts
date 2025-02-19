import axiosInstance from "@/config/axios-interceptor";

interface ChatbotPayload {
	message: string;
}
export const postChatBotAction = async (payload: ChatbotPayload) => {
	try {
		const res = await axiosInstance.post("chat-bot", payload);

		return res.data;
	} catch (error) {
		console.error("Error calling Gemini API:", error);
		return { error: "Internal Server Error" };
	}
};
