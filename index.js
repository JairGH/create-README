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
  contributing,
  license,
  test,
  question,
  email,
}) =>
  `# ${title}
    
## Description

${description}

- What was your motivation? ${firstQ}
- Why did you build this project? ${secondQ}
- What problem does it solve? ${thirdQ}
- What did you learn? ${fourthQ}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

## Installation

${installation}

## Usage 

${usage}

## Contributing

${contributing}

## License

${license}
    
## Test

${test}

## Questions

- GitHub
https://github.com/${question}

- Email ${email}


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
      name: "contributing",
      message:
        "Provide collaborators, third-party assets, or followed tutorials.",
    },
    {
      type: "list",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "test",
      message: "Go the extra mile and write tests for your application.",
    },
    {
      type: "input",
      name: "question",
      message: "What is your GitHub user name.",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?, for contact purposes.",
    },
  ])

  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile("readme.md", readmePageContent, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
