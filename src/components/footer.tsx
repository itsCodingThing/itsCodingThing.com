import { profile } from "@/data/profile";

export default function Footer() {
	return (
		<footer className="mt-24 pt-6 pb-8 border-t border-zinc-800">
			<p className="text-xs text-muted">
				<span className="text-terminal">#</span> © {new Date().getFullYear()}{" "}
				{profile.name}
			</p>
		</footer>
	);
}
