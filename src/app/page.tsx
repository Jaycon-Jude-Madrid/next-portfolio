"use client";
import { Header } from "@/components/landing-page/header";
import Profile from "@/components/landing-page/profile";

export default function Page() {
	return (
		<div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg ">
			<section className="grid grid-cols-12 gap-2 py-8 px-4 md:px-0 md:py-10">
				<div className="col-span-12">
					<Header />
				</div>
				{/* Add more grid items here */}
				<div className="col-span-12">
					<Profile />
				</div>
			</section>
			{/* 
    <InteractiveGridPattern
    className={cn(
      "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
      "absolute inset-0 w-full h-full"
    )}
    /> */}
		</div>
	);
}
