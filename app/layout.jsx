import { Inter } from "next/font/google";
import "./globals.css";
import CtHeader from "@/components/CtHeader";
import CtFooter from "@/components/CtFooter";
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
				<CtFooter />
			</body>
		</html>
	);
}
