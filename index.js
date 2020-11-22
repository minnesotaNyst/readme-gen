const inquirer = require('inquirer');

/* const generateMarkdown = require('./utils/generateMarkdown.js'); */

// array of questions for user
const questions = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of your project? (Requried)',
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log('Please enter a project name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please provide a thorough description of your project:',
			validate: description => {
				if (description) {
					return true;
				} else {
					console.log('Please provide a description!');
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
