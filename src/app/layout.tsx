import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-mode/context";
import ThemeMode from "@/components/theme-mode/theme-mode";

import "@/styles/tailwind.css";
import "@/styles/style.css";

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
		<html lang="en">
			<body>
				<ThemeProvider>
					<ThemeMode>
						<div className="h-screen overflow-y-scroll container mx-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
							{props.children}
							{props.about}
							{props.socials}
							{props.quote}
						</div>
					</ThemeMode>
				</ThemeProvider>
			</body>
		</html>
	);
}
