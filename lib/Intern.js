// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        // getRole(){} // Overridden to return 'Intern'
    }
    // getSchool(){}


    // getRole(){}


}
let ramza = new Intern('Ramza', 69, 'email@email',"University of Washington");

console.log(ramza);