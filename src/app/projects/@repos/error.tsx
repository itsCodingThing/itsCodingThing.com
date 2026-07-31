"use client";

export default function ErrorPage() {
	return (
		<p className="text-sm text-muted">
			<span className="text-terminal">$</span> Oops...! unable to fetch projects
			<span className="cursor-blink text-terminal">▊</span>
		</p>
	);
}
