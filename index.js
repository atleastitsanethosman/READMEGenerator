// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?\n',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.\n',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation guidance or directions.\n',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give details on how a user would use your project.\n',
    },
    {
        type: 'input',
        name: 'authorName',
        message: 'What is your name?\n',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?\n',
    },
    {
        type: 'input',
        name: 'gitId',
        message: 'What is your GitHub username?\n',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the path to a screenshot of your project: (can be left blank if not yet created)\n',
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the copyright year for your project:\n',
    },
    {
        type: 'input',
        name: 'citations',
        message: 'Cite the resouces you used such as libraries, or API sites, etc.\n',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license you want to use:',
        choices: [
        { 
            name: 'MIT license',
            value: 'mit'
        },
        {
            name: 'Mozilla Public License 2.0',
            value: 'mozilla'
        },
        {
            name: 'Eclipse Public License version 2.0',
            value: 'eclipse'
        },
        {
            name: 'No License',
            value: 'none'
        }]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide direction on outside contribution.\n',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide guidance on testing as part of the project.\n',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log('success!'))
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('READMEOUT.md',answers)
    })
}

// Function call to initialize app
init();
