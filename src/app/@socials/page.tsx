import { ExternalLink } from "@/components/buttons";
import ScollArrow from "@/components/scroll-arrow";

export default function Socials() {
	return (
		<section
			id="socials"
			className="min-h-svh relative dark:text-white snap-start"
		>
			<div className="h-screen flex flex-col items-center justify-center">
				<p className="text-secondary text-2xl mb-6 text-center">FIND ME</p>
				<div className="flex flex-row justify-center gap-4">
					<ExternalLink href="https://linkedin.com/in/itscodingthing">
						LINKEDIN
					</ExternalLink>
					<ExternalLink href="https://github.com/itsCodingThing">
						GITHUB
					</ExternalLink>
					<ExternalLink href="https://twitter.com/bhanu1729">
						TWITTER
					</ExternalLink>
				</div>
			</div>
			<div className="absolute bottom-10 left-1/2">
				<ScollArrow to="#quote" />
			</div>
		</section>
	);
}
