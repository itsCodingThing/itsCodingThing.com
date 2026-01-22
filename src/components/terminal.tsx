"use client";

import { useRef, useEffect } from "react";
import TerminalInput from "./terminal-input";
import TerminalOutputHistory from "./terminal-ouput-history";
import TerminalCommands from "./terminal-commands";

interface CommandOutput {
	command: string;
	output: string;
	type: "success" | "error" | "info";
}

export default function Terminal() {
	const terminalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, []);

	const getOutputClass = (type: CommandOutput["type"]) => {
		switch (type) {
			case "error":
				return "text-red-400";
			case "info":
				return "text-blue-400";
			default:
				return "text-green-400";
		}
	};

	return (
		<div
			ref={terminalRef}
			className="bg-gray-900 border-x border-b border-gray-700 rounded-b-lg p-2 sm:p-4 flex-1 overflow-y-auto"
			style={{ minHeight: "0" }}
		>
			<div className="mb-4">
				<p className="text-green-400 text-sm sm:text-base">
					Welcome to Bhanu&apos;s Terminal Portfolio
				</p>
				<p className="text-gray-400 text-xs">
					Type &apos;help&apos; to see available commands
				</p>
			</div>

			<TerminalCommands />
			<TerminalOutputHistory />
			<TerminalInput />
		</div>
	);
}
