const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./src/generateHTML.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const allEmployees = [];

//FIGURE OUT HOW TO ADD ROLE WHEN USER IS ENTERED

//Prompt for 1 manager on start
const startPrompt = () => {
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

//prompt choices: add engineer, add intern, or finish
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
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGH)
    allEmployees.push(engineer);
    directory();
  })
}

addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the name of the Intern? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the Intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: 'What is the id of the Intern? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the id of the Intern!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the email of the Intern? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the email of the Intern!');
          return false;
        }
      }
    },
    {
    type: 'input',
    name: 'internSchool',
    message: 'What is the School of the Intern? (Required)',
    validate: onInput => {
      if (onInput) {
        return true;
      } else {
        console.log('Please enter the school of the Intern!');
        return false;
      }
    }
  }
  ]).then((answers) => {
    console.log(answers);
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    allEmployees.push(intern);
    directory();
  })
}

//finishes and creates the html file
finish = () => {
  
  return writeFile(generatePage(allEmployees));

}

startPrompt();
