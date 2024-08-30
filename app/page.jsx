"use client";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
//
export default function Home() {
	//
	return (
		<MainLayout>
			{/* Banner */}
			<section
				id="home-banner"
				className="max-md:flex-col-reverse flex gap-10 justify-center items-center "
			>
				<Image
					src="/my-face.jpg"
					alt="my face"
					width={500}
					height={500}
					className="max-w-full w-[20rem] lg:w-[30rem] border-[4px] border-primary-medium shrink"
				></Image>
				{/* Text Box */}
				<div
					id="banner_text"
					className="flex flex-col max-w-xl min-w-fit shrink-0"
				>
					<h1 id="my-name" className="mb-5">
						I&apos;m{" "}
						<span className="text-6xl lg:text-8xl font-extrabold text-gray-200">
							Hooman
							<br />
							Talakian,
						</span>
					</h1>
					<p>
						a professional{" "}
						<span className="bold-span">Music Producer</span>,
						<br />a dedicated{" "}
						<span className="bold-span">Educator</span>,
						<br />a focused{" "}
						<span className="bold-span">Programmer</span> and
						<br />a flexible{" "}
						<span className="bold-span">Creative Leader</span>.
					</p>
				</div>
			</section>
		</MainLayout>
	);
}
