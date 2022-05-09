// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string 
//"GPLv2", "Apache","GPLv3","BSD_3--Clause","BSD_2--Clause","LGPLv3","AGPLv3"
function renderLicenseLink(license) {
  if(license === "None") {
    return "";
  }
  if(license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }
  if(license === "GPLv2") {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  }
  if(license === "Apache2.0") {
    return "No license";
  }
  if(license === "GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if(license === "BSD_3--Clause") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  if(license === "BSD_2--Clause") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  }
  if(license === "AGPLv3") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  }

  return `license link`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return "";
  }
  return  `## License 
  Project uses ${license}
  `;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  ## Description
  ${data.Description}

  ## Table of Contents
  - [Installation](#installation-instructions)
  - [Installation](#installation-instructions)
  - [Contributing](#contribution-guidelines)
  - [Tests](#test-instructions)
  - [Questions](#Questions)

  ## Installation Instructions
  ${data.Installation}

  ## Contribution Guidelines
  ${data.Contributing}

  ## Test Instructions
  ${data.Tests}
  
  ## Questions
  If you have any questions, contact ${data.Username} on GitHub or send an email to ${data.Email}

  
  ${renderLicenseSection(data.license)} license
`;
}

module.exports = generateMarkdown;
