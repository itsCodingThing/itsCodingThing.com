"use client";

import type { ReactNode } from "react";
import { useThemeMode } from "./context";

export default function ThemeMode({ children }: { children: ReactNode }) {
	const { themeMode } = useThemeMode();

	return <div className={themeMode}>{children}</div>;
}
