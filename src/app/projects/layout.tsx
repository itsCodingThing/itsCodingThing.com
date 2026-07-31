export default function ProjectsLayout(props: LayoutProps<"/projects">) {
	return (
		<div className="py-10">
			{props.children}
			{props.repos}
		</div>
	);
}
