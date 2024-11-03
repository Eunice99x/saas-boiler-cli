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
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// Framework configurations
const FRAMEWORKS = {
  FULLSTACK: {
    FRONTEND: ["next", "nuxt"],
    DATABASE: ["mysql", "postgres", "supabase", "mongodb"],
  },
  SEPARATE: {
    FRONTEND: ["next", "angular", "nuxt"],
    BACKEND: ["express", "gin", "django"],
    DATABASE: ["mysql", "postgres", "supabase", "mongodb"],
  },
};

const theme = {
  primary: chalk.blue,
  secondary: chalk.gray,
  success: chalk.green,
  error: chalk.red,
  heading: chalk.bold.white,
};

const displayBox = (content, options = {}) => {
  console.log(
    boxen(content, {
      padding: 1,
      margin: 1,
      borderStyle: "single",
      borderColor: "gray",
      ...options,
    })
  );
};

const displayWelcomeMessage = () => {
  console.clear();
  console.log(
    theme.heading(
      figlet.textSync("Project Gen", {
        font: "Standard",
        horizontalLayout: "default",
      })
    )
  );

  displayBox(theme.secondary("Modern project generator for web applications"), {
    borderStyle: "single",
  });
  console.log("\n");
};

const promptProjectType = async () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: theme.primary("Select project type:"),
      choices: ["Fullstack", "Separate Frontend/Backend"],
    },
  ]);
};

const promptFullstackChoices = async () => {
  const answers = {};

  const { frontend } = await inquirer.prompt([
    {
      type: "list",
      name: "frontend",
      message: theme.primary("Select frontend framework:"),
      choices: FRAMEWORKS.FULLSTACK.FRONTEND,
    },
  ]);
  answers.frontend = frontend;

  if (answers.frontend === "next" || answers.frontend === "nuxt") {
    const { frameworkType } = await inquirer.prompt([
      {
        type: "list",
        name: "frameworkType",
        message: theme.primary(`Select ${answers.frontend} variant:`),
        choices: ["TypeScript", "JavaScript"],
      },
    ]);
    answers.frontend = `${answers.frontend}-${
      frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
    }`;
  }

  const { database } = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: theme.primary("Select database:"),
      choices: FRAMEWORKS.FULLSTACK.DATABASE,
    },
  ]);
  answers.database = database;

  return answers;
};

const promptSeparateChoices = async () => {
  const answers = {};

  const { frontend } = await inquirer.prompt([
    {
      type: "list",
      name: "frontend",
      message: theme.primary("Select frontend framework:"),
      choices: FRAMEWORKS.SEPARATE.FRONTEND,
    },
  ]);
  answers.frontend = frontend;

  if (answers.frontend === "next" || answers.frontend === "nuxt") {
    const { frameworkType } = await inquirer.prompt([
      {
        type: "list",
        name: "frameworkType",
        message: theme.primary(`Select ${answers.frontend} variant:`),
        choices: [
          { name: "TypeScript", value: "next-ts" },
          { name: "JavaScript", value: "next-js" },
        ],
      },
    ]);
    answers.frontend = `${answers.frontend}-${
      frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
    }`;
  }

  const { backend } = await inquirer.prompt([
    {
      type: "list",
      name: "backend",
      message: theme.primary("Select backend framework:"),
      choices: FRAMEWORKS.SEPARATE.BACKEND,
    },
  ]);
  answers.backend = backend;

  if (answers.backend === "express") {
    const { frameworkType } = await inquirer.prompt([
      {
        type: "list",
        name: "frameworkType",
        message: theme.primary(`Select ${answers.backend} variant:`),
        choices: [
          { name: "TypeScript", value: "express-ts" },
          { name: "JavaScript", value: "express-js" },
        ],
      },
    ]);
    answers.backend = `${answers.backend}-${
      frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
    }`;
  }

  const { database } = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: theme.primary("Select database:"),
      choices: FRAMEWORKS.SEPARATE.DATABASE,
    },
  ]);
  answers.database = database;

  return answers;
};

const initGitRepo = async (projectPath) => {
  const spinner = createSpinner("Initializing Git repository").start();
  try {
    execSync("git init", { cwd: projectPath });
    const gitignore = `node_modules/\n.env\n.DS_Store\ndist/\nbuild/\n.next/\n.nuxt/`;
    fs.writeFileSync(path.join(projectPath, ".gitignore"), gitignore);

    spinner.success({
      text: theme.success("Git repository initialized"),
    });
  } catch (error) {
    spinner.error({
      text: theme.error(`Git initialization failed: ${error.message}`),
    });
  }
};

const getTemplatePaths = (choices, isFullstack) => {
  const { frontend, backend, database } = choices;
  const basePath = path.join(__dirname, "..", "packages");

  let backendType = isFullstack ? "express" : backend.split("-")[0];
  const databasePath = path.join(basePath, "database", database, backendType);

  return {
    frontend: path.join(basePath, "frontend", frontend),
    ...(isFullstack
      ? {}
      : { backend: path.join(basePath, "backend", backend) }),
    database: databasePath,
  };
};

const createTargetDirectories = (isFullstack) => {
  const dirs = isFullstack
    ? ["frontend", "database"]
    : ["frontend", "backend", "database"];
  return dirs.map((dir) => {
    const fullPath = path.join(process.cwd(), dir);
    fs.mkdirpSync(fullPath);
    return fullPath;
  });
};

const copyTemplates = async (templates, targetDirs) => {
  for (const [key, sourcePath] of Object.entries(templates)) {
    const spinner = createSpinner(`Copying ${key} template`).start();
    await sleep(1000);
    try {
      await fs.copy(
        sourcePath,
        targetDirs[Object.keys(templates).indexOf(key)],
        {
          overwrite: true,
        }
      );
      spinner.success({
        text: theme.success(`${key} template copied`),
      });
    } catch (error) {
      spinner.error({
        text: theme.error(`Failed to copy ${key} template: ${error.message}`),
      });
      process.exit(1);
    }
  }
};

const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    console.log(theme.error(`Directory not found: ${dir}`));
    process.exit(1);
  }
};

const main = async () => {
  try {
    displayWelcomeMessage();

    const { projectType } = await promptProjectType();
    const isFullstack = projectType === "Fullstack";
    const choices = isFullstack
      ? await promptFullstackChoices()
      : await promptSeparateChoices();

    const { initGit } = await inquirer.prompt([
      {
        type: "confirm",
        name: "initGit",
        message: theme.primary("Initialize Git repository?"),
        default: true,
      },
    ]);

    const templates = getTemplatePaths(choices, isFullstack);
    console.log("");

    const checkingSpinner = createSpinner("Verifying templates").start();
    await sleep(1000);
    Object.values(templates).forEach(ensureDirectoryExists);
    checkingSpinner.success({ text: theme.success("Templates verified") });

    const creatingDirsSpinner = createSpinner(
      "Creating project structure"
    ).start();
    await sleep(1000);
    const targetDirs = createTargetDirectories(isFullstack);
    creatingDirsSpinner.success({
      text: theme.success("Project structure created"),
    });

    await copyTemplates(templates, targetDirs);

    if (initGit) {
      await initGitRepo(process.cwd());
    }

    const startCommands = isFullstack
      ? "cd frontend && npm install && npm run dev\ncd ../database && npm install"
      : "cd frontend && npm install && npm run dev\ncd ../backend && npm install && npm run dev\ncd ../database && npm install";

    displayBox(
      theme.heading("Project created successfully") +
        "\n\n" +
        theme.secondary("To start development:") +
        "\n\n" +
        theme.primary(startCommands),
      { borderColor: "gray" }
    );

    const docsLink = terminalLink(
      "Documentation",
      "https://saas-boiler-cli-web.vercel.app/docs"
    );
    console.log(theme.secondary(`\nView ${docsLink} for more information`));
  } catch (error) {
    displayBox(theme.error(`Error: ${error.message}`), {
      borderStyle: "single",
      borderColor: "red",
    });
    process.exit(1);
  }
};

main();
