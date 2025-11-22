import MagicTyping from "@/components/magic-typing";
import ScollArrow from "@/components/scroll-arrow";
import ThemeToggle from "@/components/theme-mode/theme-toggle";

export default function HomePage() {
	return (
		<>
			<ThemeToggle />
			<section
				id="intro"
				className="min-h-svh relative dark:text-white snap-start"
			>
				<div className="h-screen grid place-items-center">
					<MagicTyping
						lines={["itsCodingThing", "I am developer", "I am foodie"]}
					/>
				</div>
				<ScollArrow to="#about" />
			</section>
		</>
	);
}
