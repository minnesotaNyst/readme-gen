//use a switch statement function to determing which badge icon should be displayed at the top of the readme
const generateBadges = licenseBadge => {
	let result = '';

	switch (licenseBadge) {
		case 'MIT':
			result = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `;
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
  
  ### Table of Contents
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contributing](#contributing)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  - [About](#about)  
  
  ## Usage  
  ${data.usage}   

  ## Installation  

  1. To install and use ${
		data.title
	}, the end user should clone this project to a location on their local machine.  
  2. Once the end user has cloned the repository, they should open the generator in their installed version of a text editor (Visual Studio).  
  3. After the repository has been opened, run "npm init" in the terminal of thetext editor, or in the open terminal as long as the file path is at the root of the project. This will initialize the creation of a .json package (be sure to follow the prompts). 
  4. The final step to installing the ${
		data.title
	} will be to run "npm install inquirer" in the terminal. This step will install the inquier package into the node_modules folder.  

  **To run the program, write 'node index.js' in the terminal. Be sure to validate that the terminal is pointed to the program root**  
    
  ## License  
  ${data.licenses} ${generateBadges(data.licenses)}  
    
  To learn more about what the license means, click on the badge icon displayed above or at the top of the ${
		data.title
	}

  ## Contributing  
  
  ${data.contributors}  

  ## Tests  
    
  Make sure to follow the prompts. If there is a requirement to document a field, that means it is neccesary data for the ${
		data.title
	} to run. If the prompt does not have a requirment listed, test this by leaving the data entry blank and moving on to the next section.


  ## Questions
  Thanks for looking at ${data.tile}, my name is ${
		data.name
	}! If you would like to reach me, feel free to write to ${
		data.email
	}. I will look forward to hearing from you!
  
  ${generateAbout(data.about)}  
`;
};

module.exports = generateMarkdown;
