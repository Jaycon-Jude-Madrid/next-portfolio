"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedBeam } from "../magicui/animated-beam";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-14 items-center justify-center rounded-full border  p-3 shadow-[0_0_20px_-1size-14px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export function TechStack() {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className="relative flex   w-full items-center justify-center p-2"
			ref={containerRef}
		>
			<div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-4">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref}>
						<Icons.react />
					</Circle>
					<Circle ref={div5Ref}>
						<Icons.nestjs />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div2Ref}>
						<Icons.tailwind />
					</Circle>
					<Circle ref={div4Ref} className="size-16">
						<Icons.shadcn />
					</Circle>
					<Circle ref={div6Ref}>
						<Icons.typescript />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref}>
						<Icons.nextjs />
					</Circle>
					<Circle ref={div7Ref}>
						<Icons.javascript />
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
			/>
		</div>
	);
}

const Icons = {
	react: () => <Image src="/react.svg" alt="React" width={500} height={500} />,
	nestjs: () => (
		<Image src="/next-js.svg" alt="React" width={500} height={500} />
	),

	tailwind: () => (
		<Image src="/tailwind.svg" alt="React" width={500} height={500} />
	),
	shadcn: () => (
		<Image src="/web-app.svg" alt="React" width={500} height={500} />
	),
	typescript: () => (
		<Image src="/typescript.svg" alt="React" width={500} height={500} />
	),
	nextjs: () => (
		<Image src="/nest-js.svg" alt="React" width={500} height={500} />
	),
	javascript: () => (
		<Image src="/firebase.svg" alt="React" width={500} height={500} />
	),
};
