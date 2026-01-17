import ClearCmd from "./commands/clear";
import DateCmd from "./commands/date";
import HelpCmd from "./commands/help";
import LsCmd from "./commands/ls";
import PwdCmd from "./commands/pwd";
import WhoAmICmd from "./commands/whoami";
import FortuneCmd from "./commands/fortune";
import CatCmd from "./commands/cat";
import CdCmd from "./commands/cd";
import EchoCmd from "./commands/echo";
import AsciiCmd from "./commands/ascii";
import StarwarsCmd from "./commands/starwars";
import HackCmd from "./commands/hack";
import SudoCmd from "./commands/sudo";
import MatrixCmd from "./commands/matrix";
import UnknownCmd from "./commands/unknown";

export default function TerminalCommands() {
	return (
		<>
			<DateCmd />
			<HelpCmd />
			<ClearCmd />
			<WhoAmICmd />
			<PwdCmd />
			<LsCmd />
			<FortuneCmd />
			<CatCmd />
			<CdCmd />
			<EchoCmd />
			<AsciiCmd />
			<StarwarsCmd />
			<HackCmd />
			<SudoCmd />
			<MatrixCmd />
			<UnknownCmd />
		</>
	);
}
