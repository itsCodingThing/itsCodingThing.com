"use client";

import { MoonIcon, SunIcon } from "../icons";
import { useThemeMode } from "./context";

export default function ThemeToggle() {
	const { themeMode, setThemeMode } = useThemeMode();

	return (
		<button
			type="button"
			className="cursor-pointer border-2 rounded-full dark:border-white fixed top-0 right-0 z-999 m-3"
			onClick={() => {
				setThemeMode((mode) => {
					if (mode === "dark") {
						return "light";
					}

					return "dark";
				});
			}}
		>
			{themeMode === "light" ? (
				<MoonIcon className="w-15 h-15 animate-wiggle" />
			) : (
				<SunIcon className="text-white w-15 h-15 animate-wiggle" />
			)}
		</button>
	);
}
