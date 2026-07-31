export default function TerminalLabel({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 className="text-sm text-terminal mb-6">
			<span className="text-muted">$</span> {children}
		</h2>
	);
}
