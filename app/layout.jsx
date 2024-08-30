import { Inter } from "next/font/google";
import "./globals.css";
import CtHeader from "@/components/Header";
//
const inter = Inter({ subsets: ["latin"] });
//
export const metadata = {
	title: "Hooman Talakian",
	description: "This is Hooman's Portfolio",
};
//
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} text-gray-200`}>
				<CtHeader />
				{children}
				<footer className="bg-primary-dark py-2 w-full text-primary-medium text-center">
					Hooman Talakian 2024
				</footer>
			</body>
		</html>
	);
}
