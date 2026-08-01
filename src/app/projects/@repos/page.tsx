import Image from "next/image";
import ogs from "open-graph-scraper";
import { Suspense } from "react";
import { getPinnedRepos, type PinnedRepo } from "@/utils/github";

export default async function Repos() {
	const result = await getPinnedRepos("itsCodingThing");

	return (
		<div className="grid md:grid-cols-3 gap-3">
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
			<Suspense
				fallback={
					<Image
						src="/assets/repo-placeholder.png"
						width={1200}
						height={600}
						alt="demo image"
						className="rounded"
					/>
				}
			>
				<OgImage url={project.url} />
			</Suspense>
			<p className="mt-2 text-body leading-relaxed">{project.description}</p>
			<p className="mt-3 text-xs text-muted">
				<span className="text-terminal">[</span>
				{project.primaryLanguage.name}
				<span className="text-terminal">]</span>
			</p>
		</div>
	);
}

async function OgImage(props: { url: string }) {
	const og = await ogs({ url: props.url });
	const { ogImage } = og.result;

	if (ogImage) {
		if (ogImage.length > 0) {
			const image = ogImage[0];

			return (
				<img
					alt={image.alt ?? "repo image"}
					src={image.url}
					width={image.width}
					height={image.height}
					className="rounded"
				/>
			);
		}
	}
}
