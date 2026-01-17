import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { fileSystem } from "@/utils/file-system";

interface LsCommand extends Command {
	cmd: AvailableCmds["ls"];
}

const LsCmdAtom = atom<LsCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "ls") {
		return cmd as LsCommand;
	}

	return null;
});

export default function LsCmd() {
	const cmd = useAtomValue(LsCmdAtom);
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
							output: fileSystem
								.toSorted((a, b) => {
									if (a.type === "directory" && b.type === "file") {
										return -1;
									}

									if (a.type === "file" && b.type === "directory") {
										return 1;
									}

									return 0;
								})
								.map((item) => {
									const icon = item.type === "directory" ? "📁" : "📄";
									return `${icon} ${item.name}${item.type === "directory" ? "/" : ""}`;
								})
								.join("  "),
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
