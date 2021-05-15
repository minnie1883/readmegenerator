// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your README title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of the project:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Install instructions for the project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the application?',
    },
    {
      type: 'input',
      name: 'list',
      message: 'Choose a license for the README:',
      choices : ["Apache", "Boost", "BSD", "IBM", "Pearl", "MIT"],
    },
    {
      type: 'input',
      name: 'contribtions',
      message: 'Add other contributors to this project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    },
  ]);
};


// TODO: Create a function to initialize app
  const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
