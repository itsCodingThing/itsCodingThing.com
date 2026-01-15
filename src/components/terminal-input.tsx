import { useClickAway } from "@uidotdev/usehooks";
import useTerminal from "@/hooks/use-terminal";
import { useEffect, useRef } from "react";

export default function TerminalInput() {
	const terminal = useTerminal();
	const inputRef = useRef<HTMLInputElement>(null);
	const clickAwayRef = useClickAway<HTMLFormElement>(() => {
		inputRef.current?.focus();
	});

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<form
			ref={clickAwayRef}
			onSubmit={(e) => {
				e.preventDefault();
				terminal.executeCmd(terminal.input);
			}}
			className="flex items-center flex-wrap"
		>
			<span className="text-green-400 mr-2 whitespace-nowrap shrink-0 text-xs sm:text-sm">
				visitor@portfolio:{terminal.currentPath}$
			</span>
			<input
				ref={inputRef}
				type="text"
				value={terminal.input}
				onChange={(e) => {
					terminal.setInput(e.currentTarget.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Tab") {
						e.preventDefault();
						terminal.autoComplete();
					}

					if (e.key === "ArrowUp") {
						e.preventDefault();
						terminal.moveCmdHistory("up");
					}

					if (e.key === "ArrowDown") {
						e.preventDefault();
						terminal.moveCmdHistory("down");
					}
				}}
				className="flex-1 bg-transparent outline-none text-green-400 placeholder-green-600 min-w-0 text-xs sm:text-sm"
				placeholder="Enter command... (Tab: autocomplete, ↑↓: history)"
				autoComplete="off"
				spellCheck="false"
				style={{ WebkitTapHighlightColor: "transparent" }}
			/>
		</form>
	);
}
