// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return data.license ? '![License: ${data.license}]' : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return data.license
  ? `(https://img.shields.io/badge/license-${data.license}-green)`
  :"";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-green.svg)
  
  ## Table of Contents
  * [Description](#description)\n
  * [Install](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Questions](#questions)\n
  
  ## Description
  ${data.description}  

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.testing}   

  ## Questions
  Link to my GitHub: https://github.com/${data.github}
  Email: ${data.email} 
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
