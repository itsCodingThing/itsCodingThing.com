"use client";

interface SquigglyProps {
	children: React.ReactNode;
	color?: "gradient" | string;
}

export default function Squiggly({ children, color }: SquigglyProps) {
	const isGradient = color === "gradient" || !color;

	const strokeColor = isGradient
		? "url(#squiggly-gradient)"
		: color || "currentColor";

	return (
		<span className="relative inline-block">
			{children}
			<svg
				className="absolute -bottom-1 left-0 w-full h-1.5"
				viewBox="0 0 100 6"
				preserveAspectRatio="none"
			>
				<path
					d="M0 3 Q 8 0, 16 3 T 32 3 T 48 3 T 64 3 T 80 3 T 100 3"
					stroke={strokeColor}
					strokeWidth="2"
					fill="none"
				/>
				{isGradient && (
					<defs>
						<linearGradient
							id="squiggly-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#3b82f6" />
							<stop offset="50%" stopColor="#a855f7" />
							<stop offset="100%" stopColor="#ec4899" />
						</linearGradient>
					</defs>
				)}
			</svg>
		</span>
	);
}
