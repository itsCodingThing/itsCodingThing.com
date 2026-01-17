import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface EchoCommand extends Command {
	cmd: AvailableCmds["echo"];
}

const EchoCmdAtom = atom<EchoCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "echo") {
		return cmd as EchoCommand;
	}

	return null;
});

export default function EchoCmd() {
	const cmd = useAtomValue(EchoCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			const output = cmd.args.join(" ");
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{
							executedCmd: cmd,
							input: cmd.input,
							output,
						},
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
