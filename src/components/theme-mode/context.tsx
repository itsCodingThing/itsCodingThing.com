"use client";

import { atom, Provider as JotaiProvider, useAtom } from "jotai";
import { type ReactNode, useSyncExternalStore } from "react";

const Themes = ["dark", "light"] as const;
type Theme = (typeof Themes)[number];

const theme = atom<Theme>("dark");

interface ThemeProps {
	children: ReactNode;
}

export function useThemeMode() {
	const [themeMode, setThemeMode] = useAtom(theme);

	return { themeMode, setThemeMode };
}

export function useThemeChange() {
	const change = useSyncExternalStore(
		function subscribe(cb) {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", cb);

			return () => {
				window
					.matchMedia("(prefers-color-scheme: dark)")
					.removeEventListener("change", cb);
			};
		},
		function getSnapshot() {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		},
		function getServerSnapshot() {
			return true;
		},
	);

	return change;
}

export function ThemeProvider(props: ThemeProps) {
	return <JotaiProvider>{props.children}</JotaiProvider>;
}
