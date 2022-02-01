//ties Engineer.js into Engineer.test.js
const Engineer = require('../lib/Engineer.js');

//constructor argument
test('should show engineer github', () => {
    const github = 'James'
    const engineer = new Engineer("name", 123456, "email", github)
        expect(engineer.github).toBe(github)
})

//method arguments
test('method for getting engineer github', () => {
    const github = 'James'
    const engineer = new Engineer("name", 123456, "email", github)
        expect(engineer.getGithub()).toBe(github)
})

test('method for getting engineer role', () => {
    const getrole = 'Engineer'
    const engineer = new Engineer("name", 123456, "email", "github")
        expect(engineer.getRole()).toBe(getrole)
})