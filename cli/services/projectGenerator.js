import path from "path";
import fs from "fs-extra";
import { execSync } from "child_process";
import { createSpinner } from "nanospinner";
import { theme } from "../utils/display.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export const initGitRepo = async (projectPath) => {
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

export const getTemplatePaths = (choices, isFullstack) => {
    const { frontend, backend, database } = choices;
    const basePath = path.join(__dirname, "..", "..", "packages");
  
    console.log("Base path:", basePath);
    console.log("Choices:", choices);
  
    let backendType = isFullstack ? "express" : backend.split("-")[0];
    const databasePath = path.join(basePath, "database", database, backendType);
  
    const paths = {
      frontend: path.join(basePath, "frontend", frontend),
      ...(isFullstack
        ? {}
        : { backend: path.join(basePath, "backend", backend) }),
      database: databasePath,
    };
  
    console.log("Template paths:", paths);
  
    return paths;
  };

export const createTargetDirectories = (isFullstack) => {
    const dirs = isFullstack
      ? ["frontend", "database"]
      : ["frontend", "backend", "database"];
    return dirs.map((dir) => {
      const fullPath = path.join(process.cwd(), dir);
      fs.mkdirpSync(fullPath);
      return fullPath;
    });
};

export const copyTemplates = async (templates, targetDirs) => {
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

export const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        console.log(theme.error(`Directory not found: ${dir}`));
        console.log("Current working directory:", process.cwd());
        console.log("CLI directory:", __dirname);
        console.log("Directory contents of project root:", fs.readdirSync(path.join(__dirname, '..', '..')));
        process.exit(1);
    }
};