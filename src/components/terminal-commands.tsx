import ClearCmd from "./commands/clear";
import DateCmd from "./commands/date";
import HelpCmd from "./commands/help";
import LsCmd from "./commands/ls";
import PwdCmd from "./commands/pwd";
import WhoAmICmd from "./commands/whoami";

export default function TerminalCommands() {
	return (
		<>
			<DateCmd />
			<HelpCmd />
			<ClearCmd />
			<WhoAmICmd />
			<PwdCmd />
			<LsCmd />
		</>
	);
}
