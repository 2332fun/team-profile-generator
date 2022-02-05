//template for page layout
module.exports = generatePage = allEmployees => {
  //map allEmployees, generateHTML
  const employeeHTML = allEmployees.map(employee => {
    if (employee.getRole() == 'Manager') {
      return generateManager(employee)
  }
  if (employee.getRole() == 'Engineer') {
    return generateEngineer(employee)
  }
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
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
    ${employeeHTML.join("")}
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
  <h2>Manager</h2>
  <p>Name: ${Manager.name}</p>
  <p>Id: ${Manager.id}</p>
  <p>Email: ${Manager.email}</p>
  <p>Office Number: ${Manager.officeNumber}</p>`
}

// Template for Engineer
const generateEngineer = Engineer => {
  return `
  <h2>Engineer</h2>
  <p>Name: ${Engineer.name}</p>
  <p>Id: ${Engineer.id}</p>
  <p>Email: ${Engineer.email}</p>
  <p>Github: ${Engineer.github}</p>`
}

// template for intern
const generateIntern = Intern => {
  return `
  <h2>Intern</h2>
  <p>Name: ${Intern.name}</p>
  <p>Id: ${Intern.id}</p>
  <p>Email: ${Intern.email}</p>
  <p>School: ${Intern.school}</p>`
}
  

  