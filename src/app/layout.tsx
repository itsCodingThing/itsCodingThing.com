import type { Metadata } from "next";
import "@/styles/tailwind.css";
import "@/styles/style.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
	title: "itsCodingThing - Full Stack Developer",
	description:
		"Portfolio of Bhanu Pratap Singh, a full-stack developer crafting clean, efficient, and user-focused web experiences.",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-ink text-body font-mono antialiased">
				<div className="max-w-3xl mx-auto px-5 min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
