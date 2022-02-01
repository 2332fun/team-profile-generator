//ties Employee.js into Employee.test.js
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
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
    const email = employee.name + "@gmail.com"
    const employee = new Employee("Dave", 123456, email)
        expect(employee.email).toBe(email)
})

