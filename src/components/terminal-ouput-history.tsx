import useTerminal from "@/hooks/use-terminal";

export default function TerminalOutputHistory() {
	const terminal = useTerminal();

	return terminal.cmdHistory.history.map((cmd, index) => (
		<div key={index} className="mb-3 sm:mb-4">
			<div className="flex items-start flex-wrap">
				<span className="text-green-400 mr-2 whitespace-nowrap shrink-0">
					visitor@portfolio:{terminal.currentPath}$
				</span>
				<span className="text-gray-300 break-all">{cmd.input}</span>
			</div>
			<pre
				className={`mt-1 whitespace-pre-wrap text-green-400 text-xs sm:text-sm leading-relaxed`}
				style={{ wordBreak: "break-word" }}
			>
				{cmd.output}
			</pre>
		</div>
	));
}
