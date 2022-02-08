//template for page layout
module.exports = generatePage = allEmployees => {
  //map allEmployees, generateHTML
  const managerHTML = allEmployees.map(employee => {
    if (employee.getRole() == 'Manager') {
      return generateManager(employee)
    }
  })
  const engineerHTML = allEmployees.map(employee => {
    if (employee.getRole() == 'Engineer') {
      return generateEngineer(employee)
    }
  })

  const internHTML = allEmployees.map(employee => {
    if (employee.getRole() == 'Intern') {
      return generateIntern(employee)
    }
  })


  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile Generator</h1>
      </div>
    </header>
    <main class="container my-5">
    ${managerHTML.join("")}
    ${engineerHTML.join("")}
    ${internHTML.join("")}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2022 by Diana</h3>
    </footer>
  </body>
  </html>
  `;
};

// template for Manager
const generateManager = Manager => {
  return `
  <div class ="container flex-row justify-space-around align-center employee manager">
  <h2>Manager</h2>
  <p>Name: ${Manager.name}</p>
  <p>Id: ${Manager.id}</p>
  <p>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
  <p>Office Number: ${Manager.officeNumber}</p>
  </div>
  `
}

// Template for Engineer
const generateEngineer = Engineer => {
  return `
  <div class ="container flex-row justify-space-around align-center employee engineer">
  <h3>Engineer</h3>
  <p>Name: ${Engineer.name}</p>
  <p>Id: ${Engineer.id}</p>
  <p>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
  <p>Github: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></p>
  </div>
  `
}

// template for intern
const generateIntern = Intern => {
  return `
  <div class ="container flex-row justify-space-around align-center employee intern">
  <h4>Intern</h4>
  <p>Name: ${Intern.name}</p>
  <p>Id: ${Intern.id}</p>
  <p>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
  <p>School: ${Intern.school}</p>
  </div>
  `
}
  

  