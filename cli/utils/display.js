import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

export const theme = {
  primary: chalk.blue,
  secondary: chalk.gray,
  success: chalk.green,
  error: chalk.red,
  heading: chalk.bold.white,
};

export const displayBox = (content, options = {}) => {
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

export const displayWelcomeMessage = () => {
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