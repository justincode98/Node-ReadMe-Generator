const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown");
const generateMark = require("./utils/generateMarkdown");
const fs = require("fs");
const { rejects, ok } = require("assert");
const Choices = require("inquirer/lib/objects/choices");


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project!",
    },
    {
        type: "input",
        name: "Installation",
        message: "Please enter installation instructions",
    },
    {
        type: "input",
        name: "Usage",
        message: "How to use your project?",
    },
    {
        type: "input",
        name: "Contributing",
        message: "What are the contribution guidlines?",
    },
    {
        type: "input",
        name: "Tests",
        message: "Please enter test instructions",
    },
    {
        type: "input",
        name: "Username",
        message: "What's your GitHub username?",
    },
    {
        type: "input",
        name: "Email",
        message: "What's your email?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license?",
        choices: ["None", "MIT", "GPLv2", "Apache2.0","GPLv3","BSD_3--Clause","BSD_2--Clause","AGPLv3"]
    }
    //liscence
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writing")
    return fs.writeFile(fileName, data, err =>{
        if(err) {
            console.log("writing failed");
        }
        console.log("writing suceeded");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response) {
        console.log("init called");
        writeToFile("./dist/README.md", generateMark({...response}));
    });
}

// Function call to initialize app
init();
