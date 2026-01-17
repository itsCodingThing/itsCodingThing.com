import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { fortunes } from "@/utils/text";

interface FortuneCommand extends Command {
	cmd: AvailableCmds["fortune"];
}

const FortuneCmdAtom = atom<FortuneCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "fortune") {
		return cmd as FortuneCommand;
	}

	return null;
});

export default function FortuneCmd() {
	const cmd = useAtomValue(FortuneCmdAtom);
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
							output: `🔮 Developer Fortune:\n\n"${fortunes[Math.floor(Math.random() * fortunes.length)]}"`,
						},
					],
				};
			});
			// Clear the command atom after execution
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
