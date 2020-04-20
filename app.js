const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./output/htmlRenderer");


let teamArray = [];

function startApp() {
    // renderHtml();
    addManager();
}

function addManager() {
    inquirer.prompt([{
        message: "Enter the Team Manager's Name",
        name: "name"
    }, {
        type: "number",
        message: "What is your Employee Id?",
        name: "id"

    }, {
        message: "What is your Managers Email?",
        name: "email"

    }, {
        type: "number",
        message: "What is your team manager's office number?",
        name: "officeNumber"

    }, ]).then(function (data) {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;

        const teamMember = new Manager(name, id, email, officeNumber);
        teamArray.push(teamMember);
        addTeamMembers();

        console.log(teamArray);
    });
}

function addTeamMembers() {
    inquirer.prompt([{
        type: "list",
        message: "Would you like to add more members to your team?",
        choices: ["Yes, Add Engineer", "Yes, Add Intern", "No, the  team is finished"],
        name: "addMemberData"


    }, ]).then(function (data) {
        switch (data.addMemberData) {
            case "Yes, Add Engineer":
                addEngineer();
                break;

            case "Yes, Add Intern":
                addIntern();
                break;

            case "No, the  team is finished":
                completeTeam();
                break;
        }
    });
}
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your Employee Id?",
            name: "id"
    
        },

        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            teamArray.push(teamMember);
            addTeamMembers();
        });

}
function addIntern(){
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your Employee Id?",
            name: "id"
    
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            teamArray.push(teamMember);
            addTeamMembers();
        });

}
function completeTeam(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Would you like to complete your team?",
            choices: ["complete", "quit"],
            name: "completeTeam"
        }
        ]).then(function (data) {
            if (data.completeTeam === "complete") {
                let renderTeam = render(teamArray);
                fs.writeFile("output/team.html", renderTeam, function(err){
                    if(err){
                        return console.log(err);
                    }
                    console.log("team.txt created");
                });
            } else {
                
                process.exit(0);
            }
        });
}


startApp();




// {
//     type: "list",
//     message: "Select team member's role",
//     choices: [
//         "Engineer",
//         "Intern",
//         "Manager"
//     ],
//     name: "role"
// }, {
//     message: "Enter team members Id",
//     name: "id"

// }]).then(function ({
//     name,
//     role,
//     id,
//     email
// }) {

//     let roleInfo = "";
//     if (role === "Engineer") {
//         roleInfo = "Github username";
//     } else if (role === "Intern") {

//     }
// })
// }