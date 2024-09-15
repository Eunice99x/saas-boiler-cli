#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import fs from "fs-extra";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	const answers = await inquirer.prompt([
		{
			type: "list",
			name: "frontend",
			message: "Choose a frontend framework:",
			choices: ["nextjs", "angular"],
		},
	]);

	console.log("Generating project with options:", answers);

	const { frontend, backend, database } = answers;

	// Define paths to templates based on user choices
	const templates = {
		frontend: path.join(__dirname, "..", "packages", "frontend", frontend),
	};

	// Process templates (for example, copying files)
	try {
		fs.copySync(templates.frontend, path.join(process.cwd(), "frontend"));

		console.log("Project generated successfully!");
	} catch (error) {
		console.error("Error generating project:", error);
	}
}

main();
