//ties Employee.js into Employee.test.js
const Employee = require('../lib/Employee.js');

//constructor arguments
test('should show employee name', () => {
    const name = 'Dave'
    const employee = new Employee(name)
        expect(employee.name).toBe(name)
})

test('should show employee id', () => {
    const id = 123456
    const employee = new Employee("Dave", id)
        expect(employee.id).toBe(id)
})

test('should show employee email', () => {
    const email = 'Dave@gmail.com'
    const employee = new Employee("Dave", 123456, email)
        expect(employee.email).toBe(email)
})

//method arguments
test('method for getting the employee name', () => {
    const name = 'Dave'
    const employee = new Employee(name)
        expect(employee.getName()).toBe(name)
})

test('method for getting the employee id', () => {
    const id = 123456
    const employee = new Employee("Dave", id)
        expect(employee.getID()).toBe(id)
})

test('method for getting the employee email', () => {
    const email = 'Dave@gmail.com'
    const employee = new Employee("Dave", 123456, email)
        expect(employee.getEmail()).toBe(email)
})

test('method for getting the employee role', () => {
    const role = 'Employee'
    const employee = new Employee("Dave", 123456, 'email')
        expect(employee.getRole()).toBe(role)
})