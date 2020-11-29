const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

// array of questions for user
const questions = () => {
	console.log(`
	===============
	README MARKDOWN
	===============
	`);
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
			type: 'input',
			name: 'email',
			message: 'What is your email address? (Required)',
			validate: emailInput => {
				if (emailInput) {
					return true;
				} else {
					console.log('Please enter your email!');
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
			message: 'Provide some information about yourself: ',
			when: ({ confirmAbout }) => {
				if (confirmAbout) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Requried)',
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log('Please enter a project name!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'website',
			message: 'Please provide a link to your published website: (Required)',
			validate: websiteInput => {
				if (websiteInput) {
					return true;
				} else {
					console.log('Please provide your published website link!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'repository',
			message: 'Please provide a link to your repository: (Required)',
			validate: repositoryInput => {
				if (repositoryInput) {
					return true;
				} else {
					console.log('Please provide your repository link!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'description',
			message:
				'Please provide a thorough description and usage of your project: (Required)',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please provide a description!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Please provide a use case for your project: (Required)',
			validate: usageInput => {
				if (usageInput) {
					return true;
				} else {
					console.log('Please provide a use case!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'contributors',
			message:
				'Please list any contributors of the project here: (Comma separated)'
		},
		{
			type: 'checkbox',
			name: 'languages',
			message:
				'Please select the license associated with this project: (Required)',
			choices: ['HTML', 'CSS', 'Javascript', 'Node', 'JQuery'],
			validate: languagesInput => {
				if (languagesInput) {
					return true;
				} else {
					console.log('Please select a license for your project...');
					return false;
				}
			}
		},
		{
			type: 'list',
			name: 'licenses',
			message: 'Please select the license associated with this project: ',
			choices: ['MIT', 'Eclipse', 'IBM', 'Mozilla', 'Boost', 'Apache']
		}
	]);
};

questions().then(data => {
	const pageMD = generateMarkdown(data);

	fs.writeFile('./g-readme.md', pageMD, err => {
		if (err) throw new Error(err);
		console.log(
			'Your README is complete! Check it out g-readme.md to see the output!'
		);
	});
});
