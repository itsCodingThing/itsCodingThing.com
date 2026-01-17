import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";

interface WhoAmICommand extends Command {
	cmd: AvailableCmds["whoami"];
}

const WhoAmICmdAtom = atom<WhoAmICommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "whoami") {
		return cmd as WhoAmICommand;
	}

	return null;
});

export default function WhoAmICmd() {
	const cmd = useAtomValue(WhoAmICmdAtom);
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
							output: "visitor",
						},
					],
				};
			});
		}
	}, [cmd]);

	return null;
}
