import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom, CurrentPathAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { fileSystem, findFile } from "@/utils/file-system";

interface CatCommand extends Command {
	cmd: AvailableCmds["cat"];
}

const CatCmdAtom = atom<CatCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "cat") {
		return cmd as CatCommand;
	}

	return null;
});

export default function CatCmd() {
	const cmd = useAtomValue(CatCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const currentPath = useAtomValue(CurrentPathAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			const [filename] = cmd.args;

			if (!filename) {
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: "cat: missing file operand",
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			const filePath = filename.startsWith("/")
				? filename
				: `${currentPath}/${filename}`;

			const file = findFile(filePath.replace("~/", ""));

			if (!file) {
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: `cat: ${filename}: No such file or directory`,
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			if (file.type === "directory") {
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: `cat: ${filename}: Is a directory`,
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{
							executedCmd: cmd,
							input: cmd.input,
							output: file.content || "File is empty",
						},
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, currentPath, setCmdHistory, setCmd]);

	return null;
}
