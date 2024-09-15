#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import fs from "fs-extra";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default structure to be created if the source directory is empty
const defaultStructure = {
  src: {
    pages: { 'index.js': '// Default content for index.js' },
    components: { 'App.js': '// Default content for App.js' }
  },
  public: { 'favicon.ico': '' },
  'README.md': '# Default Project\n\nThis is a default README.md file.'
};

// Function to create default files and directories
function createDefaultFiles(baseDir, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = path.join(baseDir, key);
    if (typeof value === 'object') {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirpSync(fullPath);
      }
      createDefaultFiles(fullPath, value);
    } else {
      fs.writeFileSync(fullPath, value);
    }
  });
}

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

  const { frontend } = answers;

  // Define paths to templates based on user choices
  const templates = {
    frontend: path.join(__dirname, "..", "packages", "frontend", "next"), // Updated path
  };

  // Ensure the source directory exists
  if (!fs.existsSync(templates.frontend)) {
    console.log(`Source directory ${templates.frontend} does not exist.`);
    process.exit(1);
  }

  // Define the target directory for copying
  const targetDir = path.join(process.cwd(), "frontend");

  // Ensure the target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirpSync(targetDir); // Create the target directory recursively
  }

  // Process templates (e.g., copy files)
  try {
    // Check if the source directory is empty
    if (!fs.readdirSync(templates.frontend).length) {
      console.log(`Source directory ${templates.frontend} is empty. Adding default files.`);
      createDefaultFiles(templates.frontend, defaultStructure);
    }

    // Copy all contents from the source to the target directory
    fs.copySync(templates.frontend, targetDir, {
      overwrite: true, // Optional: overwrite existing files
    });
    console.log("Project generated successfully!");
  } catch (error) {
    console.error("Error generating project:", error);
  }
}

main();
