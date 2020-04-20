// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;















// let mike = new Employee('Michael', 69, 'email@email');

// console.log(mike);