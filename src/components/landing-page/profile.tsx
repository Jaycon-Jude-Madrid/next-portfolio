"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Code, User } from "lucide-react";
import { useState } from "react";
import { TechStack } from "./tech-stack";
import TechStackBadges from "./tech-stack-badges";

export default function Profile() {
	const [showBadges, setShowBadges] = useState(true);

	const handleSwitchChange = () => {
		setShowBadges(!showBadges);
	};

	return (
		<div className="grid gap-3 grid-cols-12 h-full">
			{/* Left Column */}
			<div className="col-span-12 md:col-span-7 flex flex-col h-full">
				{/* About Card */}
				<Card className="mb-4 flex-grow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="h-4 w-4" />
							About
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-sm">
							Hi 👋, I&apos;m Jaycon, a front-end developer with nearly five
							years of experience specializing in React. My primary focus is
							client-side development, but I also have some experience working
							with back-end technologies and deployment processes. While my
							expertise lies in front-end development, I&apos;m comfortable
							handling aspects of the back-end and deployment when needed.
						</p>
					</CardContent>
				</Card>

				{/* Tech Stack Card */}
				<Card className="flex-grow">
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle className="flex items-center gap-2">
							<Code className="h-4 w-4" />
							Tech Stack
						</CardTitle>

						<div className="flex items-center space-x-2">
							<Switch
								id="tech-stack"
								checked={showBadges}
								onCheckedChange={handleSwitchChange}
							/>
							<Label htmlFor="tech-stack">
								{showBadges ? "Badge" : "Beam"}
							</Label>
						</div>
					</CardHeader>
					<CardContent>
						<AnimatePresence mode="wait">
							{showBadges ? (
								<motion.div
									key="badges"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3 }}
								>
									<TechStackBadges />
								</motion.div>
							) : (
								<motion.div
									key="techstack"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3 }}
								>
									<TechStack />
								</motion.div>
							)}
						</AnimatePresence>
					</CardContent>
				</Card>
			</div>

			{/* Right Column - Experience */}
			<div className="col-span-12 md:col-span-5 flex flex-col h-full">
				<Card className="flex-grow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BookOpen className="h-4 w-4" />
							Experience
						</CardTitle>
					</CardHeader>
					<CardContent className="h-[30rem] overflow-y-auto">
						<ScrollArea className="h-full pr-4">
							<div className="relative ml-2">
								<div className="absolute left-0 top-0 h-full w-0.5 bg-border" />
								{[
									{
										role: "Front-end Developer",
										company: "Jobvious",
										year: "Present",
										location: "IT Park, Cebu, Philippines",
									},
									{
										role: "Front-end Engineer",
										company: "EIOR Technologies",
										year: "2024-2025",
										location: "Remote",
									},
									{
										role: "Front-end Developer",
										company: "CyTech International",
										year: "2024",
										location: "Cagayan de Oro, Philippines",
									},
									{
										role: "Web Developer (Internship)",
										company: "CyTech International",
										year: "2023",
										location: "Cagayan de Oro, Philippines",
									},
									{
										role: "Front-end Developer",
										company:
											"STI Interschool (Hackathon) 7th placer Nationwide",
										year: "2022",
										location: "Baguio, Philippines",
									},
									{
										role: "Front-end Developer",
										company: "Google Solution Challenge (Hackathon)",
										year: "2021",
										location: "Cagayan de Oro, Philippines",
									},
									{
										role: "Bachelor of Science in Information Technology",
										company: "STI College",
										year: "2019 - 2023",
										location: "Cagayan de Oro, Philippines",
									},
								].map((item, index) => (
									<div key={index} className="relative mb-8 pl-6">
										<div
											className={`absolute -left-1 top-0 h-3 w-3 rounded-full ${
												index === 0 ? "bg-primary" : "bg-border"
											}`}
										/>
										<div className="flex items-center justify-between gap-2">
											<div>
												<h3 className="font-medium text-xs">{item.role}</h3>
												<p className="text-xs">{item.company}</p>
												<p className="text-xs text-muted-foreground pt-1">
													{item.location}
												</p>
											</div>
											<Badge variant="secondary" className="shrink-0">
												{item.year}
											</Badge>
										</div>
									</div>
								))}
							</div>
						</ScrollArea>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
