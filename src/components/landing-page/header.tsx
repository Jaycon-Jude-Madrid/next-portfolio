"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Moon,
	Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TextAnimate } from "../magicui/text-animate";
import { Button } from "../ui/button";

export function Header() {
	const { setTheme, theme } = useTheme();

	const handleThemeChange = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const actions = [
		{
			icon: <Linkedin className="h-4 w-4" />,
			link: "https://www.linkedin.com/in/jaycon-jude-madrid-a29801230",
		},
		{
			icon: <Github className="h-4 w-4" />,
			link: "https://github.com/Jaycon-Jude-Madrid",
		},
		{
			icon: <Instagram className="h-4 w-4" />,
			link: "https://www.instagram.com/iskadoush__",
		},
		{
			icon: <Mail className="h-4 w-4" />,
			link: "mailto:jaycon46madrid@gmail.com", // Replace with your email address
		},
	];

	return (
		<div className="w-full p-4">
			<div className="relative flex items-start justify-between">
				{/* Main content wrapper */}
				<div className="flex gap-6 lex-row sm:gap-6">
					{/* Image container */}
					<div className="relative h-32 w-32 overflow-hidden rounded-xl sm:h-34 sm:w-34">
						<Image
							src="https://github.com/shadcn.png"
							alt="Profile picture"
							fill
							className="object-cover"
							priority
						/>
					</div>

					{/* Content section */}
					<div className="flex flex-col justify-center">
						<h1 className="text-2xl font-bold tracking-tight">
							<TextAnimate animation="blurInUp" by="character">
								Jaycon Madrid
							</TextAnimate>
						</h1>

						<div className="flex items-center gap-1.5 text-xs mt-1">
							<MapPin className="h-4 w-4" />
							<span>
								<TextAnimate animation="blurInUp" by="character">
									Cebu, Philippines
								</TextAnimate>
							</span>
						</div>

						<p className="text-base mt-2">
							<TextAnimate animation="blurInUp" by="character">
								Frontend Developer
							</TextAnimate>
						</p>

						<div className="pt-4 space-x-2">
							{actions.map((action, index) => (
								<a
									key={index}
									href={action.link}
									target={
										action.link.startsWith("mailto:") ? "_self" : "_blank"
									}
									rel="noopener noreferrer"
								>
									<Button variant={"outline"} size={"sm"}>
										{action.icon}
									</Button>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Dark mode toggle */}
				<div className="absolute right-0 -top-8 md:top-0 flex items-center ">
					<AnimatePresence mode="wait">
						{theme === "dark" ? (
							<motion.div
								key="sun"
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: 90 }}
								transition={{ duration: 0.3 }}
								onClick={handleThemeChange}
								className="cursor-pointer"
							>
								<Sun className="h-5 w-5" />
							</motion.div>
						) : (
							<motion.div
								key="moon"
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: 90 }}
								transition={{ duration: 0.3 }}
								onClick={handleThemeChange}
								className="cursor-pointer"
							>
								<Moon className="h-5 w-6" />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
