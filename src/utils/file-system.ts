import { aboutTxtFile, contactTxtFile, projects, skillTxtFile } from "./text";

export interface FileSystemItem {
	name: string;
	type: "file" | "directory";
	content?: string;
	children?: FileSystemItem[];
	metadata?: {
		size?: string;
		created?: string;
		modified?: string;
		description?: string;
		technologies?: string[];
		link?: string;
	};
}

export const fileSystem: FileSystemItem[] = [
	{
		name: "about.txt",
		type: "file",
		content: aboutTxtFile,
		metadata: {
			size: "2.1KB",
			created: "2024-01-15",
			modified: "2024-01-20",
			description: "Personal information and background",
		},
	},
	{
		name: "projects",
		type: "directory",
		children: [
			{
				name: "ecommerce-platform",
				type: "directory",
				children: [
					{
						name: "README.md",
						type: "file",
						content: projects.ecommerceReadmeFile,
						metadata: {
							size: "1.8KB",
							created: "2023-09-10",
							modified: "2023-12-15",
							link: "https://github.com/itsCodingThing/ecommerce-platform",
							technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
						},
					},
				],
				metadata: {
					description: "Complete e-commerce solution with modern features",
				},
			},
			{
				name: "weather-dashboard",
				type: "directory",
				children: [
					{
						name: "README.md",
						type: "file",
						content: projects.weatherReadmeFile,
						metadata: {
							size: "1.5KB",
							created: "2023-07-20",
							modified: "2023-11-30",
							link: "https://github.com/itsCodingThing/weather-dashboard",
							technologies: [
								"React",
								"Redux",
								"Chart.js",
								"OpenWeatherMap API",
							],
						},
					},
				],
				metadata: {
					description: "Real-time weather monitoring application",
				},
			},
		],
		metadata: {
			description: "Collection of personal projects and contributions",
		},
	},
	{
		name: "skills.txt",
		type: "file",
		content: skillTxtFile,
		metadata: {
			size: "2.5KB",
			created: "2024-01-10",
			modified: "2024-01-22",
			description: "Technical skills and competencies",
		},
	},
	{
		name: "contact.txt",
		type: "file",
		content: contactTxtFile,
		metadata: {
			size: "1.8KB",
			created: "2024-01-12",
			modified: "2024-01-18",
			description: "Contact information and social profiles",
		},
	},
];

export function findFile(path: string): FileSystemItem | null {
	const pathParts = path.split("/").filter((part) => part.length > 0);
	let currentItems = fileSystem;

	for (const part of pathParts) {
		if (part === "~") {
			continue; // Skip home directory part
		}

		const found = currentItems.find((item) => item.name === part);

		if (!found) {
			return null;
		}

		if (found.type === "directory" && found.children) {
			currentItems = found.children;
		} else if (found.type === "file") {
			// If this is the last part and we found a file, return it
			if (part === pathParts[pathParts.length - 1]) {
				return found;
			} else {
				// Trying to traverse through a file
				return null;
			}
		}
	}

	// If we get here, we're looking for a directory
	const finalPart = pathParts[pathParts.length - 1];
	const directory = currentItems.find((item) => item.name === finalPart);

	return directory || null;
}
