import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface ClearCommand extends Command {
	cmd: AvailableCmds["clear"];
}

const ClearCmdAtom = atom<ClearCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "clear") {
		return cmd as ClearCommand;
	}

	return null;
});

export default function ClearCmd() {
	const cmd = useAtomValue(ClearCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [{ executedCmd: cmd, input: cmd.input, output: "" }],
				};
			});
			// Clear the command atom after execution
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
