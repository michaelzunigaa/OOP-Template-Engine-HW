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
            return inquirer
            .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?"
                
                
            },
            {
                type: "input",
                name: "id",
                message: "What is your id Number?"
            },
            {   
                type: 'input',
                name: 'email',
                message: "What's your email address"
                
                
            }
            
            
        ]).then(answers => {
            fs.writeFile("input.json",)


        
            
            
        });
        
        
        
    }
    getId(){
        }

   



    // getEmail(){}

    // getRole(){} // Returns 'Employee'
}
let cloud = new Employee('', 69, 'email@email', "michaelGitHub");
cloud.getName();















// let mike = new Employee('Michael', 69, 'email@email');

// console.log(mike);