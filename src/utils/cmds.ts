export const AvailableCmds = {
	help: "help",
	clear: "clear",
	ls: "ls",
	pwd: "pwd",
	cat: "cat",
	cd: "cd",
	echo: "echo",
	date: "date",
	whoami: "whoami",
	matrix: "matrix",
	fortune: "fortune",
	ascii: "ascii",
	starwars: "starwars",
	hack: "hack",
	sudo: "sudo",
} as const;

export type AvailableCmds = typeof AvailableCmds;
export type AvailableCmd = (typeof AvailableCmds)[keyof typeof AvailableCmds];

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
