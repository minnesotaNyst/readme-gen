//use a switch statement function to determing which badge icon should be displayed at the top of the readme
const generateBadges = licenseBadge => {
	let result = '';

	switch (licenseBadge) {
		case 'MIT':
			result = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `;
			console.log(result);
			break;
		case 'Eclipse':
			result =
				'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
			break;
		case 'IBM':
			result =
				'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
			break;
		case 'Mozilla':
			result =
				'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
			break;
		case 'Boost':
			result =
				'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
			break;
		case 'Apache':
			result =
				'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
			break;
		default:
			result = '';
	}

	return result;
};

const generateAbout = aboutInput => {
	if (!aboutInput) {
		return '';
	}
	return `
  ## About the Author

  ${aboutInput}
  
  `;
};

// function to generate markdown for README
const generateMarkdown = data => {
	return `# ${data.title} ${generateBadges(data.licenses)}
  
  ## Description
  ${data.description}
  ## Deployed
  ${data.website}
  The above should include 
  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [About](#about)
  NOTE: When this section is used, the end user should be taken to each corresponding section of the README.
  ## Installation
  "If a prospective employer wanted to download and test the readme generator, they'd first clone the repo, then run the command 'npm install' to download the application's dependencies into the node_modules folder. For this reason, we never upload the node_modules folder into GitHub"
  ## Usage
  ${data.description}
  NOTE: I have no idea what goes here yet...
  ## License
  ${data.licenses}
  NOTE: The licenses for the application need to be selected from a list of options with a badge that is added near the top of the README. In addition, there needs to be a notice added to this section of the README that explains which license the application is covered under.
  QUESTION: What are the options for licenses anyway?
  ## Contributing
  ## Tests
  ## Questions
  ${data.name}
  ${data.email}
  
  ${generateAbout(data.about)}
  NOTE: This section should contain your GitHub username with a link to your GitHub profile. In addition, this section of the README should include the entered email with instructions on how to reach out.
`;
};

module.exports = generateMarkdown;
