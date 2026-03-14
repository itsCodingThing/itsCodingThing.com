import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "itsCodingThing - Portfolio",
	description: "Portfolio showcasing full-stack development skills",
};

export default function MeLayout(props: LayoutProps<"/me">) {
	return props.children;
}
