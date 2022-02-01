//ties Manager.js into Manager.test.js
const Manager = require('../lib/Manager.js');

//constructor argument
test('should get office number', () => {
    const officenumber = 654321
    const manager = new Manager("name", 123456, "email", officenumber)
        expect(manager.officeNumber).toBe(officenumber)
})

//method arguments
test('method for getting office number', () => {
    const officenumber = 654321
    const manager = new Manager("name", 123456, "email", officenumber)
        expect(manager.getOfficeNumber()).toBe(officenumber)
})

test('method for getting role', () => {
    const getrole = 'Manager'
    const manager = new Manager("name", 123456, "email", 654321)
        expect(manager.getRole()).toBe(getrole)
})