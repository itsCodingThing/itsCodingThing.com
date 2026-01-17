import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { hacked } from "@/utils/text";

interface HackCommand extends Command {
	cmd: AvailableCmds["hack"];
}

const HackCmdAtom = atom<HackCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "hack") {
		return cmd as HackCommand;
	}

	return null;
});

export default function HackCmd() {
	const cmd = useAtomValue(HackCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: hacked },
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
