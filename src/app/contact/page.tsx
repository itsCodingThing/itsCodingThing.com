import type { Metadata } from "next";
import TerminalLabel from "@/components/terminal-label";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
	title: "Contact - itsCodingThing",
	description: "Get in touch with Bhanu Pratap Singh.",
};

export default function ContactPage() {
	return (
		<div className="py-10">
			<p className="text-sm text-muted mb-2">$ cat contact.txt</p>
			<TerminalLabel>contact</TerminalLabel>

			<div className="space-y-8">
				<div>
					<p className="text-sm text-muted mb-1">email</p>
					<a
						href={`mailto:${profile.email}`}
						className="text-body hover:text-terminal transition-colors"
					>
						{profile.email}
					</a>
				</div>

				<div>
					<p className="text-sm text-muted mb-1">location</p>
					<p className="text-body">{profile.location}</p>
				</div>

				<div>
					<p className="text-sm text-muted mb-1">status</p>
					<p className="text-terminal">[{profile.availability}]</p>
				</div>

				<div>
					<p className="text-sm text-muted mb-2">socials</p>
					<div className="flex flex-wrap gap-x-6 gap-y-2">
						{profile.socials.map((social) => (
							<a
								key={social.href}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-body hover:text-terminal transition-colors"
							>
								@{social.name} ↗
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
