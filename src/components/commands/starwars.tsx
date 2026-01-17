import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { starwars } from "@/utils/text";

interface StarwarsCommand extends Command {
	cmd: AvailableCmds["starwars"];
}

const StarwarsCmdAtom = atom<StarwarsCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "starwars") {
		return cmd as StarwarsCommand;
	}

	return null;
});

export default function StarwarsCmd() {
	const cmd = useAtomValue(StarwarsCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{ executedCmd: cmd, input: cmd.input, output: starwars },
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, setCmdHistory, setCmd]);

	return null;
}
