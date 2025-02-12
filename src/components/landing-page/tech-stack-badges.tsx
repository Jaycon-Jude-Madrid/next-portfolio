import { Badge } from "../ui/badge";

const TechStackBadges = () => {
	return (
		<section className="space-y-4">
			<div className="space-y-2">
				<h3 className="text-sm">Frontend</h3>
				<div className="flex flex-wrap gap-2">
					{[
						"JavaScript",
						"TypeScript",
						"React",
						"Next.js",
						"Tailwind CSS",
						"Shadcn",
						"MagicUI",
					].map((tech) => (
						<Badge key={tech} variant="secondary" className=" ">
							{tech}
						</Badge>
					))}
				</div>
			</div>
			<div className="space-y-2">
				<h3 className="text-sm">Backend</h3>
				<div className="flex flex-wrap gap-2">
					{["Node.js", "NestJS", "Firebase", "MongoDB"].map((tech) => (
						<Badge key={tech} variant="secondary" className=" ">
							{tech}
						</Badge>
					))}
				</div>
			</div>
			<div className="space-y-2">
				<h3 className="text-sm">DevOps & Cloud</h3>
				<div className="flex flex-wrap gap-2">
					{["GCP", "AWS"].map((tech) => (
						<Badge key={tech} variant="secondary" className=" text-xs">
							{tech}
						</Badge>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStackBadges;
