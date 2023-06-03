#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 9000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('\t \t \t \t \tLets start calculation \n \n \t \t \t \t \tMade by Samavia');
    await sleep();
    rainbow.stop();
    console.log(chalk.cyanBright(` \n \n    \t \t \t \t    _____________________ 
    \t \t \t           |  _________________  |
    \t \t \t           | | | JO         0. | |                               
    \t \t \t           | |_________________| |
    \t \t \t           | |___ ___ ___   ___| |                   
    \t \t \t           | | 7 | 8 | 9 | | + | |
    \t \t \t           | |___|___|___| |___| |
    \t \t \t           | | 4 | 5 | 6 | | - | |
    \t \t \t           | |___|___|___| |___| |
    \t \t \t           | | 1 | 2 | 3 | | x | |
    \t \t \t           | |___|___|___| |___| |
    \t \t \t           | | . | 0 | = | | / | |
    \t \t \t           | |___|___|___| |___| |
    \t \t \t           |_____________________|`));
    console.log();
}
await welcome();
async function askquestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "input",
            message: chalk.magenta("Which operation do you want to perform?"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.yellow("Enter your first number:"),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.yellow("Enter your second number:"),
        }
    ]);
    if (answers.input === "Addition") {
        console.log(chalk.green(`\t${answers.num1}+ ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.input === "Subtraction") {
        console.log(chalk.green(`\t${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.input === "Multiplication") {
        console.log(chalk.green(`\t${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.input === "Division") {
        console.log(chalk.green(`\t${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.input === "Modulus") {
        console.log(chalk.green(`\t ${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`));
    }
}
async function startagain() {
    do {
        await askquestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.red("Do you want to continue? Press Y/N:"),
            },
        ]);
    } while (again.restart === "Y" || again.restart === "yes" || again.restart === "YES" || again.restart === "y");
}
;
startagain();
