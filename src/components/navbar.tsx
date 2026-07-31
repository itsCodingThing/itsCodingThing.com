"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "home" },
	{ href: "/projects", label: "projects" },
	{ href: "/contact", label: "contact" },
];

export default function Navbar() {
	const pathname = usePathname();

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	};

	return (
		<nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6">
			<Link
				href="/"
				className="text-sm text-body hover:text-terminal transition-colors"
			>
				<span className="text-terminal">~/</span>itsCodingThing
			</Link>
			<div className="flex flex-wrap gap-x-6 gap-y-2">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={
							isActive(link.href)
								? "text-sm text-terminal"
								: "text-sm text-muted hover:text-body transition-colors"
						}
					>
						~/{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
