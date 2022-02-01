//pulls Employee.js
const Employee = require('./Employee')

//makes Intern a child of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        //calls parental properties
        super(name, id, email)
        this.school = school
    }
    //methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;