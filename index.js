var prompt = require("prompt");
const fs = require("fs");
const { message } = require("prompt");
const { title } = require("process");

const generateREADME = ({ title, description }) =>
  `# ${title}
    
    ## Description

    ${description}

    - What was your motivation?
    
    `;

inquirer.prompt([
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
]);

fs.writeFile("readme.md", "utf8", (error, data) =>
  error ? console.error(error) : console.log(data)
);
