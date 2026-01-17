import {
	AvailableCmds,
	Command,
	CommandHistory,
	parseCommand,
} from "@/utils/cmds";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

const InputAtom = atom("");
export const CmdHistoryAtom = atom<{
	history: CommandHistory[];
	index: number;
}>({
	history: [],
	index: 0,
});
export const CurrentPathAtom = atom("~");
export const CmdAtom = atom<Command | null>(null);

export default function useTerminal() {
	const [input, setInput] = useAtom(InputAtom);
	const [cmdHistory, setCmdHistory] = useAtom(CmdHistoryAtom);
	const currentPath = useAtomValue(CurrentPathAtom);
	const setCmd = useSetAtom(CmdAtom);

	const executeCmd = () => {
		const parsedCmd = parseCommand(input);

		setInput("");
		setCmd(parsedCmd);
	};

	const autoComplete = () => {
		const cmd = Object.values(AvailableCmds).filter((c) => {
			return c.startsWith(input);
		});

		setInput(cmd[0]);
	};

	const moveCmdHistory = (direction: "up" | "down") => {
		let index = cmdHistory.index;
		const history = cmdHistory.history;

		if (history.length > 0) {
			if (index > 0 && index < history.length) {
				if (direction === "up") {
					index = history.length - index;
				}

				if (direction === "down") {
					index = index + 1;
				}
			}

			setInput(cmdHistory.history[index].input);
			setCmdHistory((prev) => {
				return {
					history: prev.history,
					index: index,
				};
			});
		}
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
