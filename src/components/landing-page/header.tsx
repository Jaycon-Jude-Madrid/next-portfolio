"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TextAnimate } from "../magicui/text-animate";

export function Header() {
	const { setTheme, theme } = useTheme();
	console.log(theme);
	return (
		<div className="w-full  p-4">
			<div className="relative flex items-start justify-between">
				{/* Main content wrapper */}
				<div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
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

						<p className="text-base  mt-2 ">
							<TextAnimate animation="blurInUp" by="character">
								Frontend Developer
							</TextAnimate>
						</p>
					</div>
				</div>

				{/* Dark mode toggle */}
				<div className="absolute right-0 top-0">
					<Button
						variant="secondary"
						size="icon"
						className="h-8 rounded-full px-3 "
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? (
							<Moon className="h-4 w-4" />
						) : (
							<Sun className="h-4 w-4" />
						)}
						<span className="sr-only">Toggle dark mode</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
