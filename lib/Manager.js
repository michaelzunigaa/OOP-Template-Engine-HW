// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // getRole(){} // Overridden to return 'Manager'

}

let mike = new Manager('Michael', 69, 'email@email', 111);

console.log(mike);