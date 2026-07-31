import Link from "next/link";
import TerminalLabel from "@/components/terminal-label";
import { profile } from "@/data/profile";

export default function HomePage() {
	return (
		<div>
			<section className="py-16 sm:py-24">
				<p className="text-sm text-muted mb-5">
					<span className="text-terminal">bhanu@itscodingthing</span>:~$
				</p>
				<h1 className="text-4xl sm:text-5xl text-body tracking-tight mb-4">
					{profile.name}
				</h1>
				<p className="text-xl text-terminal-bright mb-6">{profile.role}</p>
				<p className="text-body leading-relaxed max-w-xl mb-10">
					{profile.shortBio}
				</p>
				<div className="flex flex-wrap gap-6 text-sm">
					<Link
						href="/projects"
						className="text-terminal hover:text-terminal-bright transition-colors"
					>
						~/projects
					</Link>
					<Link
						href="/contact"
						className="text-terminal hover:text-terminal-bright transition-colors"
					>
						~/contact
					</Link>
				</div>
			</section>

			<section className="pb-16">
				<TerminalLabel>about.txt</TerminalLabel>
				{profile.about.map((paragraph) => (
					<p key={paragraph} className="text-body leading-relaxed mb-4">
						{paragraph}
					</p>
				))}
			</section>

			<section className="pb-16">
				<TerminalLabel>skills</TerminalLabel>
				{profile.skills.map((group) => (
					<div key={group.label} className="mb-4">
						<p className="text-muted text-sm mb-1">{group.label}</p>
						<p className="text-body">{group.items.join("  ·  ")}</p>
					</div>
				))}
			</section>
		</div>
	);
}
