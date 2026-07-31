import * as cheerio from "cheerio";
import { Suspense } from "react";
import Loading from "@/components/loading";
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
			<Suspense fallback={<Loading />}>
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
	const $ = await cheerio.fromURL(props.url);
	const link = $("head meta[property='og:image']").attr("content");
	const height = $("head meta[property='og:image:height']").attr("content");
	const width = $("head meta[property='og:image:width']").attr("content");

	return <img src={link} width={width} height={height} className="rounded" />;
}
