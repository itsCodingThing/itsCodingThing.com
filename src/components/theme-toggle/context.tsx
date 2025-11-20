"use client";

import { useSyncExternalStore } from "react";
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const mode = "dark";

const ThemeContext = createContext(mode);

interface ThemeProps {
	children: ReactNode;
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

export function useThemeMode() {
	const mode = useContext(ThemeContext);
	return mode;
}

export function ThemeProvider(props: ThemeProps) {
	const [themeMode, setThemeMode] = useState(mode);

	useEffect(() => {
		const local = localStorage.getItem("theme") ?? "dark";
		setThemeMode(local);
	}, []);

	return (
		<ThemeContext.Provider value={themeMode}>
			{props.children}
		</ThemeContext.Provider>
	);
}
