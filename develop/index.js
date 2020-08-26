const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = "./new-readme/README.md";

const questions = [
  {type: "input", name: "title", message:"What is your project title?: "},
  {type: "input", name: "description", message:"Enter your project description: "},
  {type: "input", name: "installation", message:"Include the steps required to install your project: "},
  {type: "input", name: "usage", message:"Provide instruction and use-case for your project: "},
  {type: "list", name: "license", message:"What project license are you using?: ", 
    choices:[
      {name: "MIT", value: "MIT"}, 
      {name: "GNU GPLv3", value: "GNUGPLv3"}, 
      {name: "Mozilla Public License 2.0", value: "Mozilla"}
    ]},
  {type: "input", name: "contributing", message: "Include guidelines for pull requests, user contributions, etc: "},
  {type: "input", name: "tests", message: "Provide instructions on how to run tests for this project: "},
  {type: "input", name: "email", message: "Enter your email address: "}
];

function writeToFile(fileName, data) {
  fs.writeFile("./" + fileName, data, 'utf8', err => { if (err) return console.log(err); });
}

function init() {
  inquirer.prompt(questions).then(answers => { writeToFile(fileName, generateMarkdown(answers)); });}

init();
