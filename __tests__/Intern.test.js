//ties Intern.js into Intern.test.js
const Intern = require('../lib/Intern.js');

//constructor argument
test('should show Intern school', () => {
    const school = "remote/online"
    const intern = new Intern("name", 123456, "email", school)
        expect(intern.school).toBe(school)
})

//method arguments
test('method for getting school', () => {
    const school = "remote/online"
    const intern = new Intern("name", 123456, "email", school)
        expect(intern.getSchool()).toBe(school)
})

test('method for getting role', () => {
    const getrole = 'Intern'
    const intern = new Intern("name", 123456, "email", "school")
    expect(intern.getRole()).toBe(getrole)
})