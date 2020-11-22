const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const promptUser = () => {
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
		},
		{
			type: 'confirm',
			name: 'confirmAbout',
			message:
				'Would you like to enter some information about yourself for an "About" section?',
			default: true
		},
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
				}
			}
		}
	]);
};

const questions = data => {
	if (!data.info) {
		data.info = [];
	}
	console.log(`
	===============
	README MARKDOWN
	===============
	`);
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Requried)',
			validate: title => {
				if (title) {
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
		},
		{
			type: 'input',
			name: 'reason',
			message: 'What prompted you to create this application?',
			validate: reason => {
				if (reason) {
					return true;
				} else {
					console.log('Please provide a reason!');
					return false;
				}
			}
		}
	]);
};

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {}

// function call to initialize program
//init();

/* const pageMD = generateMarkdown(data); */

promptUser()
	.then(questions)
	.then(data => {
		const pageMD = generateMarkdown(data);

		fs.writeFile('./g-readme.md', pageMD, err => {
			if (err) throw new Error(err);

			console.log(
				'Your README is complete! Check it out g-readme.md to see the output!'
			);
		});
	});
