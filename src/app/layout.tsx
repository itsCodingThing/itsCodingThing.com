import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-mode/context";

import "@/styles/tailwind.css";
import "@/styles/style.css";
import ThemeMode from "@/components/theme-mode/theme-mode";

export const metadata: Metadata = {
	title: "itsCodingThing",
	description:
		"my personal website for display my creativity and give an idea about me",
	icons: {
		shortcut: "/assets/itscodingthinglogocircle.png",
	},
};

export default function RootLayout(props: LayoutProps<"/">) {
	return (
		<html lang="en" className="scroll-smooth scroll-container">
			<body>
				<ThemeProvider>
					<ThemeMode>
						<div className="dark:bg-black">
							<div className="w-screen container mx-auto">
								{props.children}
								{props.about}
								{props.socials}
								{props.quote}
							</div>
						</div>
					</ThemeMode>
				</ThemeProvider>
			</body>
		</html>
	);
}
