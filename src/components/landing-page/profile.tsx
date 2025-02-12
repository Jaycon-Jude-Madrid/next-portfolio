import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";
import { TechStack } from "./tech-stack";

export default function Profile() {
	return (
		<div className="grid gap-4 grid-cols-12 h-full">
			{/* Left Column */}
			<div className=" col-span-12 md:col-span-7 flex flex-col h-full">
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
							veritatis non expedita vel repellendus praesentium consequuntur
							atque. Illum doloremque minus nesciunt aliquam, dicta ipsum
							veritatis corporis aperiam, itaque, enim impedit?
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
					</CardHeader>
					<CardContent>
						<TechStack />
					</CardContent>
				</Card>
			</div>

			{/* Right Column - Experience */}
			<div className="col-span-12 md:col-span-5 flex flex-col h-full">
				<Card className="flex-grow">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Briefcase className="h-4 w-4" />
							Experience
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="relative ml-2">
							<div className="absolute left-0 top-0 h-full w-0.5 " />
							{[
								{
									role: "Developer Advocate",
									company: "Centre of Excellence for GenAI, Cambridge",
									year: "2025",
								},
								{
									role: "Senior Full-Stack Developer",
									company: "Core Technology, Cambridge",
									year: "2024",
								},
								{ role: "Founder", company: "BASE404", year: "2023" },
							].map((item, index) => (
								<div key={index} className="relative mb-8 pl-6">
									<div className="absolute left-0 top-2 h-2 w-2 rounded-full " />
									<div className="flex items-center justify-between gap-2">
										<div>
											<h3 className="font-medium text-xs">{item.role}</h3>
											<p className="text-xs ">{item.company}</p>
										</div>
										<Badge variant="secondary" className=" shrink-0">
											{item.year}
										</Badge>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
