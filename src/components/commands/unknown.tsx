import { Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

const UnknownCmdAtom = atom<Command | null>((get) => {
	const cmd = get(CmdAtom);

	// If no specific command matches, treat as unknown
	if (cmd) {
		const availableCommands = [
			"help",
			"clear",
			"ls",
			"pwd",
			"cat",
			"cd",
			"echo",
			"date",
			"whoami",
			"matrix",
			"fortune",
			"ascii",
			"starwars",
			"hack",
			"sudo",
		];

		if (!availableCommands.includes(cmd.cmd)) {
			return cmd;
		}
	}

	return null;
});

export default function UnknownCmd() {
	const cmd = useAtomValue(UnknownCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{
							executedCmd: cmd,
							input: cmd.input,
							output: `bash: ${cmd.cmd}: command not found\nType 'help' to see available commands`,
						},
					],
				};
			});
			// Clear the command atom
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
