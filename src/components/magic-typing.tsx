"use client";

import { useEffect, useState } from "react";

interface MagicTypingProps {
	lines: string[];
	smartBackspace?: boolean;
}

interface MagicTypingState {
	text: string;
	index: number;
	reverse: boolean;
}

export default function MagicTyping(props: MagicTypingProps) {
	const { lines } = props;
	const [state, setState] = useState<MagicTypingState>({
		text: "",
		index: 0,
		reverse: false,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (state.reverse) {
				// going backwards
				setState((prev) => {
					const newText = state.text.slice(0, state.text.length - 1);

					if (state.text.length === 0) {
						let index = state.index;

						if (index === lines.length - 1) {
							index = 0;
						} else {
							index = index + 1;
						}

						return { ...prev, text: newText, reverse: !prev.reverse, index };
					}

					return { ...prev, text: newText };
				});
			} else {
				// going forwards
				setState((prev) => {
					const newText = lines[state.index].slice(0, state.text.length + 1);

					if (state.text.length === lines[state.index].length) {
						return { ...prev, text: newText, reverse: !prev.reverse };
					}

					return { ...prev, text: newText };
				});
			}
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, [lines, state.index, state.text, state.reverse]);

	return (
		<h1 className="text-4xl md:text-6xl text-secondary dark:text-white">
			{state.text}
			<span className="cursor-blink">|</span>
		</h1>
	);
}
