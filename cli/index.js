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
      choices: ["next", "angular"],
    },
    {
      type: "list",
      name: "backend",
      message: "Choose a backend framwork:",
      choices: ["express","gofiber"]
    },
    {
      type: "list",
      name:"database",
      message:"Chosse a database:",
      choices: ["mysql", "postgres", "mongodb", "supabase"]
    }
  ]);

  console.log("Generating project with options:", answers);

  const { frontend, backend, database } = answers;
  console.log("=================+>",frontend,backend)

  // Define paths to templates based on user choices
  const templates = {
    frontend: path.join(__dirname, "..", "packages", "frontend", frontend), // Updated path
    backend: path.join(__dirname, "..", "packages", "backend", backend), // Updated path
    database: path.join(__dirname, "..", "packages", "database", database), // Updated path
  };

  function doesItExist(templateTar){
    if (!fs.existsSync(templateTar)) {
      console.log(`Source directory ${templateTar} does not exist.`);
      process.exit(1);
    }
  }

  // Ensure the source directory exists
  doesItExist(templates.frontend)
  doesItExist(templates.backend)
  doesItExist(templates.database)


  // Define the target directory for copying
  const targetDir = path.join(process.cwd(), "frontend")
  const targetDi1 =  path.join(process.cwd(), "backend")
  const targetDi2 =  path.join(process.cwd(), "database")

  // Ensure the target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirpSync(targetDir); // Create the target directory recursively
  }
  if (!fs.existsSync(targetDi1)) {
    fs.mkdirpSync(targetDi1); // Create the target directory recursively
  }
  if (!fs.existsSync(targetDi2)) {
    fs.mkdirpSync(targetDi2); // Create the target directory recursively
  }

  // Process templates (e.g., copy files)
  try {

    // Copy all contents from the source to the target directory
    fs.copySync(templates.frontend, targetDir, {
      overwrite: true, // Optional: overwrite existing files
    });
    fs.copySync(templates.backend, targetDi1, {
      overwrite: true, // Optional: overwrite existing files
    });
    fs.copySync(templates.database, targetDi2, {
      overwrite: true, // Optional: overwrite existing files
    });
    console.log("Project generated successfully!");
  } catch (error) {
    console.error("Error generating project:", error);
  }
}

main();
