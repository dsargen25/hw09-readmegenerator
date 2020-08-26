const licenses = [
  "This project is licensed under the terms of the MIT license.",
  "https://www.gnu.org/licenses/gpl-3.0.en.html",
  "https://www.mozilla.org/en-US/MPL/2.0/"
  ]

  //Check for license

function generateMarkdown(data) {

  return `
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

  ##${data.title}

  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributing:
  ${data.contributing}

  ## Test
  ${data.tests}

  ## Questions
  Email: ${data.email} | [Github Profile](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
