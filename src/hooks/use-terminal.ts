import {
	AvailableCmds,
	Command,
	CommandHistory,
	parseCommand,
} from "@/utils/cmds";
import { atom, useAtom, useSetAtom } from "jotai";

const InputAtom = atom("");
export const pendingInputAtom = atom<string | null>(null);
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
	const [currentPath] = useAtom(CurrentPathAtom);
	const [pendingInput, setPendingInput] = useAtom(pendingInputAtom);
	const setCmd = useSetAtom(CmdAtom);

	const executeCmd = () => {
		const parsedCmd = parseCommand(input);

		// Save pending input before clearing
		setPendingInput(input);
		setInput("");
		setCmd(parsedCmd);
	};

	const autoComplete = () => {
		const cmd = Object.values(AvailableCmds).filter((c) => {
			return c.startsWith(input);
		});

		// Save pending input before auto-completion
		setPendingInput(input);
		setInput(cmd[0]);

		// Clear pending input after setting auto-completed command
		setTimeout(() => setPendingInput(null), 100);
	};

	const moveCmdHistory = (direction: "up" | "down") => {
		const history = cmdHistory.history;
		const currentIndex = cmdHistory.index;

		if (history.length === 0) return;

		let newIndex = currentIndex;

		if (direction === "up") {
			// Move to older command
			if (currentIndex > -1) {
				newIndex = currentIndex + 1;
			}
		} else if (direction === "down") {
			// Move to newer command or back to current input
			if (currentIndex === -1) {
				// From current input back to newest command
				newIndex = 0;
			} else if (currentIndex > 0) {
				// From history position back to more recent command
				newIndex = currentIndex - 1;
			}
		}

		// Set input and update index
		const newInput = newIndex === -1 ? "" : history[newIndex].input;
		setInput(newInput);
		setCmdHistory((prev) => ({ ...prev, index: newIndex }));

		// Clear pending input when actually navigating history
		setPendingInput(null);
	};

	return {
		input,
		setInput,
		executeCmd,
		autoComplete,
		cmdHistory,
		moveCmdHistory,
		currentPath,
		pendingInput,
		setPendingInput,
	};
}
