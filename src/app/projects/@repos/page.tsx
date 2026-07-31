import { getPinnedRepos, type PinnedRepo } from "@/utils/github";

export default async function Repos() {
	const result = await getPinnedRepos("itsCodingThing");

	return (
		<div className="divide-y divide-zinc-800">
			{result.map((project) => (
				<ProjectCard key={project.name} project={project} />
			))}
		</div>
	);
}

function ProjectCard({ project }: { project: PinnedRepo }) {
	return (
		<div className="py-6">
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-body hover:text-terminal transition-colors"
			>
				{project.name} <span className="text-muted text-xs">↗</span>
			</a>
			<p className="mt-2 text-body leading-relaxed">{project.description}</p>
			<p className="mt-3 text-xs text-muted">
				<span className="text-terminal">[</span>
				{project.primaryLanguage.name}
				<span className="text-terminal">]</span>
			</p>
		</div>
	);
}
