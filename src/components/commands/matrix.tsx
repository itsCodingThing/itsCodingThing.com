import { AvailableCmds, Command } from "@/utils/cmds";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { CmdAtom, CmdHistoryAtom } from "@/hooks/use-terminal";
import { useEffect, useState } from "react";

interface MatrixCommand extends Command {
	cmd: AvailableCmds["matrix"];
}

const MatrixCmdAtom = atom<MatrixCommand | null>((get) => {
	const cmd = get(CmdAtom);

	if (cmd?.cmd === "matrix") {
		return cmd as MatrixCommand;
	}

	return null;
});

export default function MatrixCmd() {
	const cmd = useAtomValue(MatrixCmdAtom);
	const setCmdHistory = useSetAtom(CmdHistoryAtom);
	const setCmd = useSetAtom(CmdAtom);
	const [matrixOutput, setMatrixOutput] = useState<string>("");

	useEffect(() => {
		if (cmd) {
			let frame = 0;
			const maxFrames = 20;
			const interval = setInterval(() => {
				frame++;

				const matrixChars = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ";
				const lines: string[] = [];

				for (let i = 0; i < 10; i++) {
					let line = "";
					for (let j = 0; j < 40; j++) {
						if (Math.random() > 0.7) {
							line +=
								matrixChars[Math.floor(Math.random() * matrixChars.length)];
						} else {
							line += " ";
						}
					}
					lines.push(line);
				}

				const frameOutput = `🌐 MATRIX RAIN - FRAME ${frame}/${maxFrames}\n\n${lines.join("\n")}`;
				setMatrixOutput(frameOutput);

				if (frame >= maxFrames) {
					clearInterval(interval);
					setCmdHistory((prev) => {
						return {
							index: prev.index + 1,
							history: [
								...prev.history,
								{
									executedCmd: cmd,
									input: cmd.input,
									output:
										"🌐 Matrix animation completed! 💚\n\nThe digital rain has ended.\nType 'matrix' again to restart the simulation.",
								},
							],
						};
					});
					setMatrixOutput("");
					setCmd(null);
				}
			}, 150);

			return () => clearInterval(interval);
		}
	}, [cmd, setCmdHistory, setCmd]);

	// Show matrix animation in terminal
	if (matrixOutput && cmd) {
		return (
			<div className="text-green-400 font-mono text-xs whitespace-pre">
				{matrixOutput}
			</div>
		);
	}

	return null;
}
