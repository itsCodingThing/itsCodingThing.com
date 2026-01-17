import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { sudo } from "@/utils/text";

interface SudoCommand extends Command {
	cmd: AvailableCmds["sudo"];
}

const SudoCmdAtom = atom<SudoCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "sudo") {
		return cmd as SudoCommand;
	}

	return null;
});

export default function SudoCmd() {
	const cmd = useAtomValue(SudoCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: sudo },
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
