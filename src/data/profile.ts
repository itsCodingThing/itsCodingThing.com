export interface Project {
	title: string;
	description: string;
	tech: string[];
	link: string;
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export interface Social {
	name: string;
	href: string;
}

export const profile = {
	name: "Bhanu Pratap Singh",
	handle: "itsCodingThing",
	role: "Full Stack Developer",
	shortBio:
		"A full-stack developer crafting clean, efficient, and user-focused web experiences.",
	about: [
		"I'm a full-stack developer with 3+ years of experience building scalable web applications. I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful solutions.",
		"Currently focused on creating exceptional user experiences with React, Next.js, and cloud technologies. Always learning, always building.",
	],
	location: "Delhi, India",
	availability: "Open to new opportunities",
	email: "bhanu.pratap@example.com",
	socials: [
		{ name: "GitHub", href: "https://github.com/itsCodingThing" },
		{ name: "LinkedIn", href: "https://linkedin.com/in/itscodingthing" },
		{ name: "Twitter", href: "https://twitter.com/itscodingthing" },
	] as Social[],
	skills: [
		{
			label: "Frontend",
			items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
		},
		{
			label: "Backend",
			items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
		},
		{
			label: "Tools & Cloud",
			items: ["Git", "Docker", "AWS", "Figma", "Jest"],
		},
	] as SkillGroup[],
	projects: [
		{
			title: "E-Commerce Platform",
			description:
				"Full-featured e-commerce with authentication, product catalog, shopping cart, and payment processing.",
			tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
			link: "https://github.com/itsCodingThing/ecommerce-platform",
		},
		{
			title: "Weather Dashboard",
			description:
				"Real-time weather application with animated visualizations and location-based detection.",
			tech: ["React", "TypeScript", "Chart.js", "OpenWeatherMap"],
			link: "https://github.com/itsCodingThing/weather-dashboard",
		},
	] as Project[],
};
