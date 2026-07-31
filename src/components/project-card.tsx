import type { Project } from "@/data/profile";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="py-6">
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="text-body hover:text-terminal transition-colors"
			>
				{project.title} <span className="text-muted text-xs">↗</span>
			</a>
			<p className="mt-2 text-body leading-relaxed">{project.description}</p>
			<p className="mt-3 text-xs text-muted">
				<span className="text-terminal">[</span>
				{project.tech.join(" / ")}
				<span className="text-terminal">]</span>
			</p>
		</div>
	);
}
