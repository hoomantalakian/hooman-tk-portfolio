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
				className="flex gap-8 justify-center items-center bg-yellow-600 "
			>
				<Image
					src="/my-face.jpg"
					alt="my face"
					width={500}
					height={500}
					className=" border-[1px] border-gray-500"
				></Image>
				{/* Text Box */}
				<div id="banner_text" className="flex flex-col max-w-full">
					<h1 id="my-name" className="mb-5">
						I&apos;m{" "}
						<span className="text-9xl font-extrabold text-gray-200">
							Hooman Talakian,
						</span>
					</h1>
					<p>
						a professional{" "}
						<span className="bold-span">Music Producer</span>, a
						dedicated <span className="bold-span">Educator</span>, a
						focused <span className="bold-span">Programmer</span>{" "}
						and flexible{" "}
						<span className="bold-span">Creative Leader</span>.
					</p>
				</div>
			</section>
		</MainLayout>
	);
}
