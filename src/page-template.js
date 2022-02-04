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
console.log(employeeHTML);

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
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Header</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateManager()}
      ${generateEngineer()}
      ${generateIntern()}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by INSERTNAME</h3>
    </footer>
  </body>
  </html>
  `;
};

// template for Manager
const generateManager = Manager => {
  // return `
  // <p>${Manager.name}</p>
  // <p>${Manager.id}</p>
  // <p>${Manager.email}</p>
  // <p>${Manager.officeNumber}</p>`
}

// Template for Engineer
const generateEngineer = Engineer => {
  // return `
  // <p>${Engineer.name}</p>
  // <p>${Engineer.id}</p>
  // <p>${Engineer.email}</p>
  // <p>${Engineer.github}</p>`
}

// template for intern
const generateIntern = Intern => {
  // return `
  // <p>${Intern.name}</p>
  // <p>${Intern.id}</p>
  // <p>${Intern.email}</p>
  // <p>${Intern.school}</p>`
}
  

  