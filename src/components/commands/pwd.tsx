import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom, CurrentPathAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface PwdCommand extends Command {
	cmd: AvailableCmds["pwd"];
}

const PwdCmdAtom = atom<PwdCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "help") {
		return cmd as PwdCommand;
	}

	return null;
});

export default function PwdCmd() {
	const cmd = useAtomValue(PwdCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const currentPath = useAtomValue(CurrentPathAtom);

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
		}
	}, [cmd]);

	return null;
}
