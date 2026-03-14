"use client";

import { useState, useEffect } from "react";

interface TypedProps {
	text: string;
	speed?: number;
	delay?: number;
	className?: string;
	showDuration?: number;
	hideDuration?: number;
}

export default function Typed({
	text,
	speed = 80,
	delay = 0,
	className,
	showDuration = 2000,
	hideDuration = 500,
}: TypedProps) {
	const [displayed, setDisplayed] = useState("");
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const startTimeout = setTimeout(() => {
			let i = 0;
			let isDeleting = false;

			const typeChar = () => {
				if (!isDeleting) {
					if (i < text.length) {
						setDisplayed(text.slice(0, i + 1));
						i++;
						timeout = setTimeout(typeChar, speed);
					} else {
						timeout = setTimeout(() => {
							isDeleting = true;
							typeChar();
						}, showDuration);
					}
				} else {
					if (i > 0) {
						i--;
						setDisplayed(text.slice(0, i));
						timeout = setTimeout(typeChar, speed / 2);
					} else {
						isDeleting = false;
						timeout = setTimeout(typeChar, hideDuration);
					}
				}
			};

			typeChar();
		}, delay);

		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => {
			clearTimeout(startTimeout);
			clearTimeout(timeout);
			clearInterval(cursorInterval);
		};
	}, [text, speed, delay, showDuration, hideDuration]);

	return (
		<span className={className}>
			{displayed}
			<span
				className={`inline-block w-1 h-[1em] ml-0.5 align-middle bg-slate-800 dark:bg-slate-200 ${
					showCursor ? "opacity-100" : "opacity-0"
				}`}
			/>
		</span>
	);
}
