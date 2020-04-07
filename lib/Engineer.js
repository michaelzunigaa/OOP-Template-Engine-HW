// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; //github username
    }

    // getRole(){} // Overridden to return 'Engineer'

}
let mike = new Engineer('Michael', 69, 'email@email', "michaelGitHub");

console.log(mike);
