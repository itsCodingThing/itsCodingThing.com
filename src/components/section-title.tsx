"use client";

import Squiggly from "./squiggly";

export default function SectionTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 className="text-sm font-medium uppercase tracking-widest mb-8 text-slate-400 dark:text-slate-500">
			<Squiggly>{children}</Squiggly>
		</h2>
	);
}
