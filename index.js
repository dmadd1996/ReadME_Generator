// TODO: Include packages needed for this application
const path = require('path')
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: "What is your project title?",
    name: 'title',
    //check that user provided a value
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'How do you install your app?',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'Give a description of your app',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'How do you use your app?',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'list',
    message: 'What license is used?',
    name: 'license',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'GitHub username:',
    name: 'git',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'E-Mail:',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Use fs (file system) here!
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log(data)
      writeToFile(`${data.git}Readme.md`, generateMarkdown({ ...data}))
    })

}

// Function call to initialize app
init();
