import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { ascii } from "@/utils/text";

interface AsciiCommand extends Command {
	cmd: AvailableCmds["ascii"];
}

const AsciiCmdAtom = atom<AsciiCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "ascii") {
		return cmd as AsciiCommand;
	}

	return null;
});

export default function AsciiCmd() {
	const cmd = useAtomValue(AsciiCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: ascii },
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
