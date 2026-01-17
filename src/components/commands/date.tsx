import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface DateCommand extends Command {
	cmd: AvailableCmds["date"];
}

const DateCmdAtom = atom<DateCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "date") {
		return cmd as DateCommand;
	}

	return null;
});

export default function DateCmd() {
	const cmd = useAtomValue(DateCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);

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
							output: new Date().toString(),
						},
					],
				};
			});
		}
	}, [cmd]);

	return null;
}
