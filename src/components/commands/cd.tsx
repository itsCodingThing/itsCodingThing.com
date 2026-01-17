import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom, CurrentPathAtom } from "@/hooks/use-terminal";
import { useEffect } from "react";
import { fileSystem } from "@/utils/file-system";

interface CdCommand extends Command {
	cmd: AvailableCmds["cd"];
}

const CdCmdAtom = atom<CdCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "cd") {
		return cmd as CdCommand;
	}

	return null;
});

export default function CdCmd() {
	const cmd = useAtomValue(CdCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const currentPath = useAtomValue(CurrentPathAtom);
	const setCurrentPath = useSetAtom(CurrentPathAtom);
	const setCmd = useSetAtom(CmdAtom);

	useEffect(() => {
		if (cmd) {
			const [targetPath] = cmd.args;

			if (!targetPath) {
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: "cd: missing directory operand",
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			if (targetPath === "..") {
				const newPath = currentPath === "~" ? "~" : "~";
				setCurrentPath(newPath);
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: "Changed to parent directory",
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			if (targetPath === "projects") {
				setCurrentPath("~/projects");
				setCmdHistory((prev) => {
					return {
						index: prev.index + 1,
						history: [
							...prev.history,
							{
								executedCmd: cmd,
								input: cmd.input,
								output: "Changed to project directory",
							},
						],
					};
				});
				setCmd(null);
				return;
			}

			if (targetPath.startsWith("projects/")) {
				const projectName = targetPath.replace("projects/", "");
				const projectsDir = fileSystem.find((item) => item.name === "projects");
				const project = projectsDir?.children?.find(
					(item) => item.name === projectName,
				);

				if (project) {
					setCurrentPath(`~/projects/${projectName}`);
					setCmdHistory((prev) => {
						return {
							index: prev.index + 1,
							history: [
								...prev.history,
								{
									executedCmd: cmd,
									input: cmd.input,
									output: `Changed to ${projectName} directory`,
								},
							],
						};
					});
					setCmd(null);
					return;
				}
			}

			setCmdHistory((prev) => {
				return {
					index: prev.index + 1,
					history: [
						...prev.history,
						{
							executedCmd: cmd,
							input: cmd.input,
							output: `bash: cd: ${targetPath}: No such directory`,
						},
					],
				};
			});
			setCmd(null);
		}
	}, [cmd, currentPath, setCurrentPath, setCmdHistory, setCmd]);

	return null;
}
