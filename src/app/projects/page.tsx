import type { Metadata } from "next";
import TerminalLabel from "@/components/terminal-label";

export const metadata: Metadata = {
	title: "Projects - itsCodingThing",
	description: "Selected projects by Bhanu Pratap Singh.",
};

export default function ProjectsPage() {
	return (
		<>
			<p className="text-sm text-muted mb-2">$ ls ./projects</p>
			<TerminalLabel>projects</TerminalLabel>
		</>
	);
}
