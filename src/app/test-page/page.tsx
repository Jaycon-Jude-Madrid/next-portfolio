"use client";
import { useState } from "react";

export default function Page() {
	const [message, setMessage] = useState("");
	const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);

	const sendMessage = async () => {
		if (message.trim()) {
			// Add user's message to chat
			setChat((prevChat) => [...prevChat, { sender: "User", text: message }]);

			// Send message to the server
			const response = await fetch("http://localhost:3000/api/chat-bot", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message }),
			});

			const data = await response.json();

			// Add bot's response to chat
			setChat((prevChat) => [
				...prevChat,
				{ sender: "Bot", text: data.botReply },
			]);

			// Clear the input field
			setMessage("");
		}
	};

	return (
		<div>
			<div>
				{chat.map((msg, index) => (
					<p key={index}>
						<strong>{msg.sender}:</strong> {msg.text}
					</p>
				))}
			</div>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type a message..."
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
}
