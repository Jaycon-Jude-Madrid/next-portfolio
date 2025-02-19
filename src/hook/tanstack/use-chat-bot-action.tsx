import { postChatBotAction } from "@/services/chat-bot";
import { useMutation } from "@tanstack/react-query";

const useChatBotAction = () => {
	return useMutation({
		mutationFn: postChatBotAction,
	});
};

export default useChatBotAction;
