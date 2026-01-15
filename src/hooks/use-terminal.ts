import { fileSystem } from "@/utils/file-system";
import { AvailableCmds, CommandHistory, parseCommand } from "@/utils/cmds";
import { help, fortunes, ascii, starwars, hacked, sudo } from "@/utils/text";
import { atom, useAtom } from "jotai";

const inputAtom = atom("");
const cmdHistoryAtom = atom<{ history: CommandHistory[]; index: number }>({
	history: [],
	index: 0,
});
const currentPathAtom = atom("~");

export default function useTerminal() {
	const [input, setInput] = useAtom(inputAtom);
	const [cmdHistory, setCmdHistory] = useAtom(cmdHistoryAtom);
	const [currentPath, setCurrentPath] = useAtom(currentPathAtom);

	const executeCmd = (value: string) => {
		const parsedCmd = parseCommand(value);
		setInput("");

		if (parsedCmd.cmd === "help") {
			setCmdHistory((prev) => {
				return {
					...prev,
					history: [
						...prev.history,
						{ executedCmd: parsedCmd, input: parsedCmd.input, output: help },
					],
				};
			});
		}

		if (parsedCmd.cmd === "clear") {
			setCmdHistory(() => {
				return {
					history: [],
					index: 0,
				};
			});
		}

		if (parsedCmd.cmd === "date") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: new Date().toString(),
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "whoami") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: "visiter",
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "pwd") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: currentPath,
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "ls") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
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
		}

		if (parsedCmd.cmd === "fortune") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: `🔮 Developer Fortune:\n\n"${fortunes[Math.floor(Math.random() * fortunes.length)]}"`,
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "ascii") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: ascii,
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "starwars") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: starwars,
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "hack") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: hacked,
						},
					],
				};
			});
		}

		if (parsedCmd.cmd === "sudo") {
			setCmdHistory((prev) => {
				return {
					index: 0,
					history: [
						...prev.history,
						{
							executedCmd: parsedCmd,
							input: parsedCmd.input,
							output: sudo,
						},
					],
				};
			});
		}

		// switch (parsedCmd.cmd) {
		// 	case "cat": {
		// 		// if (!args[1]) {
		// 		// 	return "cat: missing file operand";
		// 		// }
		// 		// const filePath = args[1].startsWith("/")
		// 		// 	? args[1]
		// 		// 	: `${currentPath}/${args[1]}`;
		// 		// const file = findFile(filePath.replace("~/", ""));
		// 		// if (!file) {
		// 		// 	return `cat: ${args[1]}: No such file or directory`;
		// 		// }
		// 		// if (file.type === "directory") {
		// 		// 	return `cat: ${args[1]}: Is a directory`;
		// 		// }
		// 		// return file.content || "File is empty";
		// 	}
		//
		// 	case "cd": {
		// 		// if (!args[1]) {
		// 		// 	setCurrentPath("~");
		// 		// 	return "Changed to home directory";
		// 		// }
		// 		// if (args[1] === "..") {
		// 		// 	setCurrentPath(currentPath === "~" ? "~" : "~");
		// 		// 	return "Changed to parent directory";
		// 		// }
		// 		// if (args[1] === "projects") {
		// 		// 	setCurrentPath("~/projects");
		// 		// 	return "Changed to projects directory";
		// 		// }
		// 		// if (args[1].startsWith("projects/")) {
		// 		// 	const projectName = args[1].replace("projects/", "");
		// 		// 	const projectsDir = fileSystem.find(
		// 		// 		(item) => item.name === "projects",
		// 		// 	);
		// 		// 	const project = projectsDir?.children?.find(
		// 		// 		(item) => item.name === projectName,
		// 		// 	);
		// 		// 	if (project) {
		// 		// 		setCurrentPath(`~/projects/${projectName}`);
		// 		// 		return `Changed to ${projectName} directory`;
		// 		// 	}
		// 		// }
		// 		// return `bash: cd: ${args[1]}: No such directory`;
		// 	}
		//
		// 	case "projects": {
		// 		const projectsDir = fileSystem.find((item) => item.name === "projects");
		//
		// 		if (projectsDir?.children) {
		// 			const prs = projectsDir.children
		// 				.map((project) => {
		// 					const metadata = project.metadata;
		// 					return `  ${project.name}/    - ${metadata?.description || "No description"}`;
		// 				})
		// 				.join("\n");
		//
		// 			return `📁 Projects Directory:\n${prs}\nType 'cd projects' to explore or 'cat projects/[project]/README.md' for details`;
		// 		}
		//
		// 		return "Projects directory not found";
		// 	}
		// }
	};

	const autoComplete = () => {
		const cmd = AvailableCmds.filter((c) => {
			return c.startsWith(input);
		});

		setInput(cmd[0]);
	};

	const moveCmdHistory = (direction: "up" | "down") => {
		let index = cmdHistory.index;

		if (direction === "up") {
			index = index + 1;
		}

		if (direction === "down") {
			index = index - 1;
		}

		setInput(cmdHistory.history[index].input);
		setCmdHistory((prev) => {
			return {
				history: prev.history,
				index: index,
			};
		});
	};

	return {
		input,
		setInput,
		executeCmd,
		autoComplete,
		cmdHistory,
		moveCmdHistory,
		currentPath,
	};
}
