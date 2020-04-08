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




// inquirer
//     .prompt([


//        questions = [{
//                 type: 'input',
//                 name: 'name',
//                 message: "What's your first name"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "What's your Id number"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "What's your email address"
//             }
// //         ]
// //     ]).then(answers => {
// //         fs.writeFile(JSON.stringify(answers, null, '  '));
// //       })
// //       .catch(error => {
// //         if(error.isTtyError) {
// //           // Prompt couldn't be rendered in the current environment
// //         } else {
// //           // Something else when wrong
//         }
//       });




  