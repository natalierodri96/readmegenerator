const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMardown = require(".utils/generateMarkdown");


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
function userPrompt()
// function to initialize program
function init() {

}

// function call to initialize program
init();
