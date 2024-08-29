"use client";
import Image from "next/image";
//
export default function Home() {
	//
	return (
		<div id="whole-page">
			{/* Header */}
			<main className="mx-[10rem] mt-[8em]">
				{/* Banner */}
				<section id="banner" className="flex gap-8 justify-center items-center">
					<Image
						src="/my-face.jpg"
						alt="my face"
						width={500}
						height={500}
						className="-z-10  border-[5px] border-primary-medium"
					></Image>
					{/* Text Box */}
					<div id="banner_text" className="flex flex-col">
						<h1 id="my-name" className="mb-5">
							I&apos;m{" "}
							<span className="text-9xl font-extrabold text-gray-200">
								Hooman Talakian,
							</span>
						</h1>
						<p>
							a professional{" "}
							<span className="bold-span">Music Producer</span>, a
							dedicated{" "}
							<span className="bold-span">Educator</span>, a
							focused{" "}
							<span className="bold-span">Programmer</span> and
							flexible{" "}
							<span className="bold-span">Creative Leader</span>.
						</p>
						{/* <p className="mt-5">
							I transform ideas into music/vision/code, guide
							others in mastering their craft, and innovate within
							the world of possibilities!
						</p> */}
					</div>
				</section>
			</main>
		</div>
	);
}
