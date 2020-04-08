// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; //github username
    }

    // getRole(){} // Overridden to return 'Engineer'

}
let rick = new Engineer('Cloud', 69, 'email@email', "michaelGitHub");

console.log(rick);
