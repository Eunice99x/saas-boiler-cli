import inquirer from "inquirer";
import { FRAMEWORKS } from "../config/frameworks.js";
import { theme } from "../utils/display.js";

// export const promptProjectType = async () => {
//     return inquirer.prompt([
//       {
//         type: "list",
//         name: "projectType",
//         message: theme.primary("Select project type:"),
//         choices: ["Fullstack", "Separate Frontend/Backend"],
//       },
//     ]);
// };

// export const promptFullstackChoices = async () => {
//     const answers = {};
  
//     const { frontend } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "frontend",
//         message: theme.primary("Select frontend framework:"),
//         choices: FRAMEWORKS.FULLSTACK.FRONTEND,
//       },
//     ]);
//     answers.frontend = frontend;
  
//     if (answers.frontend === "next" || answers.frontend === "nuxt") {
//       const { frameworkType } = await inquirer.prompt([
//         {
//           type: "list",
//           name: "frameworkType",
//           message: theme.primary(`Select ${answers.frontend} variant:`),
//           choices: ["TypeScript", "JavaScript"],
//         },
//       ]);
//       answers.frontend = `${answers.frontend}-${
//         frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
//       }`;
//     }
  
//     const { database } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "database",
//         message: theme.primary("Select database:"),
//         choices: FRAMEWORKS.FULLSTACK.DATABASE,
//       },
//     ]);
//     answers.database = database;
  
//     return answers;
// };

// export const promptSeparateChoices = async () => {
//     const answers = {};
  
//     const { frontend } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "frontend",
//         message: theme.primary("Select frontend framework:"),
//         choices: FRAMEWORKS.SEPARATE.FRONTEND,
//       },
//     ]);
//     answers.frontend = frontend;
  
//     if (answers.frontend === "next" || answers.frontend === "nuxt") {
//       const { frameworkType } = await inquirer.prompt([
//         {
//           type: "list",
//           name: "frameworkType",
//           message: theme.primary(`Select ${answers.frontend} variant:`),
//           choices: [
//             { name: "TypeScript", value: "next-ts" },
//             { name: "JavaScript", value: "next-js" },
//           ],
//         },
//       ]);
//       answers.frontend = `${answers.frontend}-${
//         frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
//       }`;
//     }
  
//     const { backend } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "backend",
//         message: theme.primary("Select backend framework:"),
//         choices: FRAMEWORKS.SEPARATE.BACKEND,
//       },
//     ]);
//     answers.backend = backend;
  
//     if (answers.backend === "express") {
//       const { frameworkType } = await inquirer.prompt([
//         {
//           type: "list",
//           name: "frameworkType",
//           message: theme.primary(`Select ${answers.backend} variant:`),
//           choices: [
//             { name: "TypeScript", value: "express-ts" },
//             { name: "JavaScript", value: "express-js" },
//           ],
//         },
//       ]);
//       answers.backend = `${answers.backend}-${
//         frameworkType.toLowerCase() === "typescript" ? "ts" : "js"
//       }`;
//     }
  
//     const { database } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "database",
//         message: theme.primary("Select database:"),
//         choices: FRAMEWORKS.SEPARATE.DATABASE,
//       },
//     ]);
//     answers.database = database;
  
//     return answers;
// };

export const promptProjectType = async () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "projectType",
        message: theme.primary("Select project type:"),
        choices: ["Fullstack", "Separate Frontend/Backend"],
      },
    ]);
};
  
export const promptFullstackChoices = async () => {
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
  
export const promptSeparateChoices = async () => {
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
          choices: ["TypeScript", "JavaScript"],
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
          choices: ["TypeScript", "JavaScript"],
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
  