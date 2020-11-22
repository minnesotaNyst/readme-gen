const inquirer = require('inquirer');

/* const generateMarkdown = require('./utils/generateMarkdown.js'); */

// array of questions for user
const questions = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name? (Required)',
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log('Please enter your name!');
					return false;
				}
			}
		}
	]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
