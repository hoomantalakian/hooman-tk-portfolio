import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div id="whole-page">
			<header className="fixed top-0 w-full py-5 bg-gray-700">
				<ul id="navbar" className="flex w-fit m-auto gap-5">
					<li>
						<Link href="/">Home</Link>{" "}
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>{" "}
					</li>
				</ul>
			</header>
			<main className="mx-[10rem] mt-[8em]">
				<section id="banner" className="flex gap-8">
					<Image
						src="/my-face.jpg"
						alt="my face"
						width={500}
						height={500}
					></Image>
					<div id="banner_text" className="flex flex-col">
						<h1 id="my-name" className="mb-5">
							I&apos;m{" "}
							<span className="font-extrabold text-9xl">
								Hooman Talakian,
							</span>
						</h1>
						<p>
							A <span className="bold-span">Music Producer</span>, Educator, Programmer and creative
							Leader.
						</p>
						<p>
							I transform ideas into music, guide others in
							mastering their craft, and innovate within the world
							of sound.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
