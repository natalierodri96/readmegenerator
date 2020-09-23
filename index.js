const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require(".utils/generateMarkdown");


// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "Input Title of project"
},
{
    type: "input",
    name: "description",
    message: "Input description of project"
},
{
    type: "input",
    name: "installation",
    message: "Any installation structures?"
},
{
    type: "input",
    name: "usage",
    message: "Use of this project?"
},
{
    type: "input",
    name: "contribution",
    message: "Any Contribution guidelines?"
},
{
    type: "input",
    name: "test",
    message: "Input test instructions"
},
{
    type: "input",
    name: "username",
    message: "Input GitHub Username"
},
{
    type: "input",
    name: "email",
    message: "Input Email Address"
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Saved Successfully");
    });
}
//function to start
function userPrompt() {
    return inquirer.prompt(questions);
};
// function to initialize program
function init() {
userPrompt () 
    .then(function (answer) {
        const data = {
            title: answer.title, 
            description: answer.installation,
            usage: answer.usage,
            contribution: answer.contribution,
            test: answer.test,
            username: answer.username
            email: answer.email
        }
        const getMarkdown = generateMarkdown(data);
        return writeToFile("README.md", getMarkdown)
    });
}
// function call to initialize program
init();
