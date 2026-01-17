import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom, CurrentPathAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface PwdCommand extends Command {
	cmd: AvailableCmds["pwd"];
}

const PwdCmdAtom = atom<PwdCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "pwd") {
		return cmd as PwdCommand;
	}

	return null;
});

export default function PwdCmd() {
	const [cmd] = useAtom(PwdCmdAtom);
	const [, setCmdHistory] = useAtom(CmdHistoryAtom);
	const [currentPath] = useAtom(CurrentPathAtom);
	const [, setCmd] = useAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: currentPath },
					],
				};
			});
			// Clear the command atom after execution
			setCmd(null);
		}
	}, [cmd, currentPath, setCmdHistory, setCmd]);

	return null;
}
