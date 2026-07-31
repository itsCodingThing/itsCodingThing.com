import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import TerminalLabel from "@/components/terminal-label";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
	title: "Projects - itsCodingThing",
	description: "Selected projects by Bhanu Pratap Singh.",
};

export default function ProjectsPage() {
	return (
		<div className="py-10">
			<p className="text-sm text-muted mb-2">$ ls ./projects</p>
			<TerminalLabel>projects</TerminalLabel>
			<div className="divide-y divide-zinc-800">
				{profile.projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</div>
	);
}
