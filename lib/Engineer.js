//pulls Employee.js
const Employee = require('./Employee')

//makes Engineer a child of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calls parental properties
        super(name, id, email)
        this.github = github
    }

    //methods for getting office number & role
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;