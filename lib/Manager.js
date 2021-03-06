//pulls Employee.js
const Employee = require('./Employee')

//makes Manager a child of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calls parental properties
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    //methods for getting office number & role
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;