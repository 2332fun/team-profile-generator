const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./src/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//WRITE PROMPTS TO MATCH MANAGER, ENGINEER, INTERN, EMPLOYEE
//Manager: Name, id, email, role, officenumber
//Engineeer: Name, id, email, role, github
//Intern: Name, id, email, role, school
//Employee: Name, id, email, role

//GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//1. PROMPT ONE MANAGER
//2. PROMPT OPTION TO ADD ENGINEER OR INTERN OR FINISH
//3. CLICKED ENGINEER: PROMPT ENGINEER, RETURN TO OPTIONS
//4. CLICKED INTERN: PROMPT INTERN, RETURN TO OPTIONS
//5. CLICKED FINISH: EXIT PROMPTS

const allEmployees = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Manager: What is your name? (Required)',
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
      name: 'managerId',
      message: 'Manager: What is your id? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Manager: What is your email? (Required)',
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
    type: 'input',
    name: 'managerON',
    message: 'Manager: What is your office number? (Required)',
    validate: onInput => {
      if (onInput) {
        return true;
      } else {
        console.log('Please enter your office number!');
        return false;
      }
    }
  }
  ]).then((answers) => {
    console.log(answers);
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerON)
    allEmployees.push(manager);
    directory();
  })
}

const directory = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'directory',
      message: 'What would you like to do next?',
      choices: [
        'Add Engineer',
        'Add Intern',
        'Finish'
      ]
    }
  ]).then((answerDirectory) => {
    console.log(answerDirectory);
    switch(answerDirectory.directory){
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      case "Finish":
        finish();
    }
  })
}

addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the name of the Engineer? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the Engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is the id of the Engineer? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the id of the Engineer!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the email of the Engineer? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the email of the Engineer!');
          return false;
        }
      }
    },
    {
    type: 'input',
    name: 'engineerGH',
    message: 'What is the Github of the Engineer? (Required)',
    validate: onInput => {
      if (onInput) {
        return true;
      } else {
        console.log('Please enter the github of the Engineer!');
        return false;
      }
    }
  }
  ]).then((answers) => {
    console.log(answers);
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerON)
    allEmployees.push(manager);
    directory();
  })
}

addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Manager: What is your name? (Required)',
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
      name: 'managerId',
      message: 'Manager: What is your id? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Manager: What is your email? (Required)',
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
    type: 'input',
    name: 'managerON',
    message: 'Manager: What is your office number? (Required)',
    validate: onInput => {
      if (onInput) {
        return true;
      } else {
        console.log('Please enter your office number!');
        return false;
      }
    }
  }
  ]).then((answers) => {
    console.log(answers);
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerON)
    allEmployees.push(manager);
    directory();
  })
}

finish = () => {
  
  return writeFile(generatePage(allEmployees));

}



// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name? (Required)',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username (Required)',
//       validate: githubInput => {
//         if (githubInput) {
//           return true;
//         } else {
//           console.log('Please enter your GitHub username!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAbout',
//       message: 'Would you like to enter some information about yourself for an "About" section?',
//       default: true
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about yourself:',
//       when: ({ confirmAbout }) => confirmAbout
//     }
//   ]);
// };

// const promptProject = portfolioData => {
//   console.log(`
// =================
// Add a New Project
// =================
// `);

//   // If there's no 'projects' array property, create one
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project name!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project description!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//           if (linkInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project GitHub link!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ])
//     .then(projectData => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
//};

addManager();


  // addManager()
  // .then(promptProject)
  // .then(portfolioData => {
  //   return generatePage(portfolioData);
  // })
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return;
  // })
  // .catch(err => {
  //   console.log(err);
  // });
