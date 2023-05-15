const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({
  title,
  description,
  firstQ,
  secondQ,
  thirdQ,
  fourthQ,
  installation,
  usage,
  credits
}) =>
  `# ${title}
    
## Description

${description}

- What was your motivation? ${firstQ}
- Why did you build this project? ${secondQ}
- What problem does it solve? ${thirdQ}
- What did you learn? ${fourthQ}

## Installation

${installation}

## Usage 

${usage}

//How can i add images?

## Credits

${credits}
    `;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Short description:",
    },
    {
      type: "input",
      name: "firstQ",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "secondQ",
      message: "Why did you build this project?",
    },
    {
      type: "input",
      name: "thirdQ",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "fourthQ",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "credits",
      message: "Provide collaborators, third-party assets, or followed tutorials.",
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile("readme.md", readmePageContent, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
