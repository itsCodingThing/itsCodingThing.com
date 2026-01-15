export const AvailableCmds = [
	"help",
	"clear",
	"ls",
	"pwd",
	"cat",
	"cd",
	"echo",
	"date",
	"whoami",
	"about",
	"projects",
	"skills",
	"contact",
	"matrix",
	"fortune",
	"ascii",
	"starwars",
	"hack",
	"sudo",
] as const;

export type AvailableCmd = (typeof AvailableCmds)[number];

export interface Command {
	cmd: AvailableCmd;
	args: string[];
	input: string;
}

export interface CommandHistory {
	executedCmd: Command;
	input: string;
	output: string;
}

export const parseCommand = (input: string) => {
	const parsedInput = input
		.trim()
		.split(" ")
		.filter((arg) => arg.length > 0)
		.map((v, i) => {
			if (i === 0) {
				return v.toLowerCase();
			}
			return v;
		});

	const [cmd, ...args] = parsedInput;

	return {
		cmd: cmd as AvailableCmd,
		args,
		input,
	};
};
