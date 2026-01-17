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
		<div className="min-h-screen bg-black text-green-400 p-2 sm:p-4 font-mono text-xs sm:text-sm md:text-base">
			<div className="max-w-6xl mx-auto h-screen flex flex-col">
				<div className="bg-gray-900 border border-gray-700 rounded-t-lg p-2 sm:p-3">
					<div className="flex items-center space-x-2">
						<div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
						<div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
						<div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
						<span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm truncate">
							terminal@portfolio
						</span>
					</div>
				</div>

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

				<div className="mt-2 sm:mt-4 text-center text-gray-500 text-xs">
					<div className="block sm:hidden">Tap terminal to focus</div>
					<div className="hidden sm:block">Type commands to interact</div>
				</div>
			</div>
		</div>
	);
}
