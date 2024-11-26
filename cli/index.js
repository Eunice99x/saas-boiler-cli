#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import terminalLink from "terminal-link";
import { displayWelcomeMessage, displayBox, theme } from "./utils/display.js";
import { promptProjectType, promptFullstackChoices, promptSeparateChoices } from "./prompts/projectPrompts.js";
import { initGitRepo, getTemplatePaths, createTargetDirectories, copyTemplates, ensureDirectoryExists } from "./services/projectGenerator.js";
import { createSpinner } from "nanospinner";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

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