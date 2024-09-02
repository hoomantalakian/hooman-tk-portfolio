"use client";
import { menuItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
//
function CtHeader() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<header className="fixed top-0 w-full border-primary-medium py-5">
			<ul id="navbar" className="m-auto flex w-fit gap-5">
				{menuItems.map((item) => (
					<li
						key={item.title}
						className={`${pathname === item.route && "border-b-[3px] border-primary-medium text-primary-light"} px-2 py-2 `}
					>
						<Link href={item.route}>{item.title}</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
export default CtHeader;
