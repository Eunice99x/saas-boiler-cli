#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import fs from "fs-extra";
import chalk from "chalk";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import boxen from "boxen";
import terminalLink from "terminal-link";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const FRAMEWORKS = {
  FRONTEND: ["next", "angular", "nuxt"],
  BACKEND: ["express", "gin", "django"],
  DATABASE: ["mysql", "postgres", "supabase", "mongodb"],
};

const FRAMEWORK_MAP = {
  express: "express",
  gin: "golang",
  django: "django",
};

const displayBox = (content, options = {}) => {
  console.log(
    boxen(content, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
      ...options,
    })
  );
};

const displayWelcomeMessage = () => {
  console.clear();
  console.log(
    chalk.cyan(
      figlet.textSync("Project Gen", {
        font: "Slant",
        horizontalLayout: "full",
      })
    )
  );

  displayBox(chalk.white("Welcome to the modern project generator CLI"));
  console.log("\n");
};

const promptUserChoices = async () => {
  const questions = Object.entries(FRAMEWORKS).map(([key, choices]) => ({
    type: "list",
    name: key.toLowerCase(),
    message: chalk.cyan(`🎨 Choose a ${key.toLowerCase()} framework:`),
    choices,
  }));

  const answers = await inquirer.prompt(questions);

  if (answers.frontend === "next") {
    const { nextType } = await inquirer.prompt([
      {
        type: "list",
        name: "nextType",
        message: chalk.cyan("🔧 Choose Next.js type:"),
        choices: [
          { name: "JavaScript", value: "next-js" },
          { name: "TypeScript", value: "next-ts" },
        ],
      },
    ]);
    answers.frontend = nextType;
  }

  return answers;
};

const getTemplatePaths = (choices) => {
  const { frontend, backend, database } = choices;
  const basePath = path.join(__dirname, "..", "packages");
  const frameworkForDatabase = FRAMEWORK_MAP[backend] || null;

  return {
    frontend: path.join(basePath, "frontend", frontend),
    backend: path.join(basePath, "backend", backend),
    database: frameworkForDatabase
      ? path.join(basePath, "database", database, frameworkForDatabase)
      : path.join(basePath, "database", database),
  };
};

const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    console.log(chalk.red(`Source directory ${dir} does not exist.`));
    process.exit(1);
  }
};

const createTargetDirectories = () => {
  return ["frontend", "backend", "database"].map((dir) => {
    const fullPath = path.join(process.cwd(), dir);
    fs.mkdirpSync(fullPath);
    return fullPath;
  });
};

const copyTemplates = async (templates, targetDirs) => {
  for (const [key, sourcePath] of Object.entries(templates)) {
    const spinner = createSpinner(`Copying ${key} template...`).start();
    await sleep(1000);
    try {
      await fs.copy(
        sourcePath,
        targetDirs[Object.keys(templates).indexOf(key)],
        { overwrite: true }
      );
      spinner.success({
        text: chalk.green(
          `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } template copied successfully!`
        ),
      });
    } catch (error) {
      spinner.error({
        text: chalk.red(`Error copying ${key} template: ${error}`),
      });
      process.exit(1);
    }
  }
};

const main = async () => {
  try {
    displayWelcomeMessage();

    const choices = await promptUserChoices();

    const templates = getTemplatePaths(choices);

    console.log("");

    const checkingSpinner = createSpinner(
      chalk.blue("Checking template directories...")
    ).start();
    await sleep(1500);
    Object.values(templates).forEach(ensureDirectoryExists);
    checkingSpinner.success({
      text: chalk.green("✅ All template directories exist!"),
    });

    const creatingDirsSpinner = createSpinner(
      chalk.blue("Creating target directories...")
    ).start();
    await sleep(1500);
    const targetDirs = createTargetDirectories();
    creatingDirsSpinner.success({
      text: chalk.green("✅ Target directories created successfully!"),
    });

    await copyTemplates(templates, targetDirs);

    displayBox(
      chalk.green.bold("🎉 Project generated successfully!") +
        "\n\n" +
        chalk.yellow("To get started, run the following commands:") +
        "\n\n" +
        chalk.cyan(
          `cd frontend && npm install && npm run dev\ncd ../backend && npm install && npm run dev\ncd ../database && npm install`
        ),
      { borderColor: "green" }
    );

    const docsLink = terminalLink(
      "Documentation",
      "https://saas-boiler-cli-web.vercel.app/docs"
    );
    console.log(
      chalk.blue(`\nFor more information, check out our ${docsLink}`)
    );
  } catch (error) {
    displayBox(
      chalk.red.bold("❌ An error occurred:") + "\n\n" + error.message,
      {
        borderStyle: "double",
        borderColor: "red",
      }
    );
    process.exit(1);
  }
};

main();
