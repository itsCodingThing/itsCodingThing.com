import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { help } from "@/utils/text";
import { useEffect } from "react";

interface HelpCommand extends Command {
	cmd: AvailableCmds["help"];
}

const HelpCmdAtom = atom<HelpCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "help") {
		return cmd as HelpCommand;
	}

	return null;
});

export default function HelpCmd() {
	const cmd = useAtomValue(HelpCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: help },
					],
				};
			});
		}
	}, [cmd]);

	return null;
}
