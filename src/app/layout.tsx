import type { Metadata } from "next";
import "@/styles/tailwind.css";
import "@/styles/style.css";

export const metadata: Metadata = {
	title: "itsCodingThing - Terminal Portfolio",
	description:
		"Interactive terminal portfolio showcasing full-stack development skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
