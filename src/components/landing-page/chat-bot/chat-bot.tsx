"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dot, MessageCircle, Send, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import useChatBotAction from "@/hook/tanstack/use-chat-bot-action";
import { cn } from "@/lib/utils";

interface MessageType {
	id: number;
	role: string;
	content: string;
}

export default function ChatBot() {
	const { mutateAsync, isPending } = useChatBotAction();
	const [messages, setMessages] = React.useState<MessageType[]>([
		{
			id: 0,
			role: "bot",
			content:
				"Hi, I'm Jaycon👋, a developer mainly focused on front-end engineering. I'm currently working here in Cebu IT Park as a frontend dev. How can I help you?",
		},
	]);
	const [input, setInput] = React.useState("");
	const [isOpen, setIsOpen] = React.useState(false);
	const messagesEndRef = React.useRef<HTMLDivElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInput(e.target.value);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input.trim()) return;

		// Add user message to state
		setMessages((prevMessages) => [
			...prevMessages,
			{ id: prevMessages.length, role: "user", content: input },
		]);

		// Add typing indicator
		setMessages((prevMessages) => [
			...prevMessages,
			{ id: prevMessages.length + 1, role: "bot", content: "Typing..." },
		]);

		// Get bot reply
		const result = await mutateAsync({
			message: input.trim(),
		});

		// Remove typing indicator and add bot reply to state
		setMessages((prevMessages) => [
			...prevMessages.slice(0, -1),
			{ id: prevMessages.length, role: "bot", content: result.botReply },
		]);

		setInput("");
	};

	React.useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const toggleChat = () => setIsOpen(!isOpen);

	return (
		<div className="fixed bottom-4 right-4 z-50">
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="chat-window"
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: 20 }}
						transition={{ duration: 0.3 }}
					>
						<Card className="w-[360px] sm:w-[400px] h-[35rem] flex flex-col mb-16 md:mb-20">
							<CardHeader className="flex justify-between flex-row items-center border-b p-3">
								<div>
									<p className="text-lg font-semibold">
										{" "}
										Chat with Jaycon&apos;s Bot
									</p>

									<p className="text-xs text-muted-foreground flex items-center">
										<Dot className="h-6 w-6 text-green-500" />
										Powered by Google Generative AI
									</p>
								</div>
								<Button variant="ghost" size="icon" onClick={toggleChat}>
									<X className="h-6 w-6" />
									<span className="sr-only">Close</span>
								</Button>
							</CardHeader>
							<CardContent className="flex-1 overflow-y-auto p-4">
								<ScrollArea className="flex flex-col space-y-4">
									{messages.map((message) => (
										<div
											key={message.id}
											className={cn(
												"mb-6 flex",
												message.role === "user"
													? "justify-end"
													: "justify-start"
											)}
										>
											<div
												className={cn(
													"rounded-lg px-3 py-2 max-w-[80%] text-xs tracking-wide",
													message.role === "user"
														? "bg-primary text-primary-foreground"
														: "bg-muted"
												)}
											>
												{message.content === "Typing..." ? (
													<div className="flex items-center space-x-2">
														<p className="font-semibold">Typing</p>
														<span className="flex space-x-1">
															<span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_1.2s_infinite_0s]"></span>
															<span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_1.2s_infinite_0.2s]"></span>
															<span className="w-2 h-2 bg-gray-400 rounded-full animate-[bounce_1.2s_infinite_0.4s]"></span>
														</span>
													</div>
												) : (
													message.content
												)}
											</div>
										</div>
									))}
								</ScrollArea>
								<div ref={messagesEndRef} />
							</CardContent>
							<CardFooter>
								<form onSubmit={handleSubmit} className="flex w-full space-x-2">
									<Input
										value={input}
										onChange={handleInputChange}
										placeholder={`${
											isPending ? "Typing..." : "Type a message..."
										}`}
										className="flex-grow"
										disabled={isPending} // Disable input when isPending is true
									/>
									<Button type="submit" size="icon" disabled={isPending}>
										<Send className="h-4 w-4" />
										<span className="sr-only">Send</span>
									</Button>
								</form>
							</CardFooter>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>
			<Button
				onClick={toggleChat}
				className={`w-auto rounded-xl p-4  absolute bottom-4 right-0 `}
			>
				<MessageCircle className="w-full" />
				<span className="">Chat with me</span>
			</Button>
		</div>
	);
}
