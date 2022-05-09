// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Git](#git)
* [E-Mail](#email)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## GitHub

${data.git}

## E-Mail

${data.email}
`;
}

module.exports = generateMarkdown;
