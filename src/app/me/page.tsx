"use client";

import { useState } from "react";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiMail,
	FiArrowRight,
	FiSun,
	FiMoon,
} from "react-icons/fi";
import SectionTitle from "@/components/section-title";

const projects = [
	{
		title: "E-Commerce Platform",
		description:
			"Full-featured e-commerce with authentication, product catalog, shopping cart, and payment processing.",
		tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
	},
	{
		title: "Weather Dashboard",
		description:
			"Real-time weather application with animated visualizations and location-based detection.",
		tech: ["React", "TypeScript", "Chart.js", "OpenWeatherMap"],
	},
];

export default function MePage() {
	const [dark, setDarkMode] = useState(true);

	const toggle = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<main className={dark ? "dark" : ""}>
			<div className="min-h-screen bg-[#fafafa] text-slate-800 dark:bg-[#0a0a0a] dark:text-slate-300 transition-colors duration-300">
				<button
					className="fixed top-6 right-6 p-3 rounded-full transition-all duration-300 z-50 bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-yellow-400 dark:border-slate-700 dark:hover:bg-slate-700"
					aria-label="Toggle theme"
					onClick={toggle}
				>
					<FiSun className="w-5 h-5 dark:hidden" />
					<FiMoon className="w-5 h-5 hidden dark:block" />
				</button>
				<div className="max-w-3xl mx-auto px-8 py-20 border-slate-200 dark:border-slate-800 border-b-0">
					<header className="mb-32">
						<p className="text-sm mb-4 text-slate-400 dark:text-slate-500">
							Hello, I am
						</p>
						<h1 className="text-5xl font-light mb-6 tracking-tight text-slate-900 dark:text-white">
							Bhanu Pratap Singh
						</h1>
						<p className="text-xl font-light leading-relaxed max-w-lg text-slate-500 dark:text-slate-400">
							A full-stack developer crafting clean, efficient, and user-focused
							web experiences.
						</p>
						<div className="flex gap-6 mt-8">
							<a
								href="#work"
								className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-600 dark:text-slate-300"
							>
								View Work
							</a>
							<a
								href="#contact"
								className="text-sm font-medium hover:text-blue-500 transition-colors text-slate-600 dark:text-slate-300"
							>
								Get in Touch
							</a>
						</div>
					</header>

					<section id="about" className="mb-32">
						<SectionTitle>About</SectionTitle>
						<div className="space-y-6 leading-relaxed text-slate-600 dark:text-slate-400">
							<p>
								I&apos;m a full-stack developer with 3+ years of experience
								building scalable web applications. I specialize in modern
								JavaScript frameworks and love turning complex problems into
								simple, beautiful solutions.
							</p>
							<p>
								Currently focused on creating exceptional user experiences with
								React, Next.js, and cloud technologies. Always learning, always
								building.
							</p>
						</div>
					</section>

					<section id="skills" className="mb-32">
						<SectionTitle>Skills</SectionTitle>
						<div className="grid grid-cols-2 gap-6">
							{[
								{
									label: "Frontend",
									items: [
										"React",
										"Next.js",
										"TypeScript",
										"Tailwind CSS",
										"Vue.js",
									],
								},
								{
									label: "Backend",
									items: [
										"Node.js",
										"Express",
										"MongoDB",
										"PostgreSQL",
										"Redis",
									],
								},
								{
									label: "Tools & Cloud",
									items: ["Git", "Docker", "AWS", "Figma", "Jest"],
								},
								{
									label: "APIs",
									items: ["REST", "GraphQL", "WebSocket", "OAuth", "Stripe"],
								},
							].map((group) => (
								<div key={group.label}>
									<p className="text-xs font-medium uppercase tracking-wide mb-3 text-slate-400 dark:text-slate-500">
										{group.label}
									</p>
									<div className="flex flex-wrap gap-2">
										{group.items.map((item) => (
											<span
												key={item}
												className="px-3 py-1.5 rounded-full text-sm bg-white border border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 transition-colors"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</section>

					<section id="work" className="mb-32">
						<SectionTitle>Selected Work</SectionTitle>
						<div className="space-y-12">
							{projects.map((project) => (
								<div key={project.title} className="group">
									<h3 className="text-lg font-medium mb-2 transition-colors text-slate-800 dark:text-slate-200 dark:group-hover:text-white group-hover:text-slate-600">
										{project.title}
									</h3>
									<p className="mb-4 leading-relaxed max-w-lg text-slate-500 dark:text-slate-400">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="text-xs text-slate-400 dark:text-slate-500"
											>
												{tech}
											</span>
										))}
									</div>
									<a
										href="#"
										className="inline-flex items-center gap-1 text-sm transition-colors text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
									>
										View Project <FiArrowRight className="w-3 h-3" />
									</a>
								</div>
							))}
						</div>
					</section>

					<section id="contact" className="mb-20">
						<SectionTitle>Get in Touch</SectionTitle>
						<p className="mb-8 leading-relaxed max-w-lg text-slate-500 dark:text-slate-400">
							I&apos;m open to new opportunities and collaborations. Feel free
							to reach out!
						</p>
						<div className="flex gap-4">
							<a
								href="mailto:bhanu.pratap@example.com"
								className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full transition-colors bg-slate-900 text-white hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500"
							>
								Say Hello <FiMail className="w-4 h-4" />
							</a>
							<div className="flex gap-2">
								{[
									{ icon: FiGithub, href: "https://github.com/itsCodingThing" },
									{
										icon: FiLinkedin,
										href: "https://linkedin.com/in/itscodingthing",
									},
									{
										icon: FiTwitter,
										href: "https://twitter.com/itscodingthing",
									},
								].map((social) => (
									<a
										key={social.href}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2.5 rounded-full transition-colors bg-white border border-slate-200 hover:border-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-slate-600"
									>
										<social.icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
									</a>
								))}
							</div>
						</div>
					</section>

					<footer className="pt-8 border-t border-slate-200 dark:border-slate-800">
						<p className="text-sm text-slate-400 dark:text-slate-500">
							© {new Date().getFullYear()} Bhanu Pratap Singh
						</p>
					</footer>
				</div>
			</div>
		</main>
	);
}
