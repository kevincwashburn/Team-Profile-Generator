const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

// Write code to use inquirer to gather information about the development team members,

const managerQuestions = [
    {
        type: "input",
        message: "what is your manager's name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is your manager's ID?",
        name: "idNumber"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "contact"
    },
    {
        type: "number",
        message: "What is your manager's office number?",
        name: "officeNumber"
    }

]

const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is your engineer's ID?",
        name: "idNumber"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "contact"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "githubName"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is your intern's ID?",
        name: "idNumber"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "contact"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
]

// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

const employeeList = [];


const runEngineer = () => {
    inquirer.prompt(engineerQuestions).then(function (answers) {

        const newEngineer = new Engineer(answers.name, answers.idNumber, answers.contact, answers.githubName);
        employeeList.push(newEngineer);
        chooseAction();
    })
}

const runIntern = () => {
    inquirer.prompt(internQuestions).then(function (answers) {
        
        const newIntern = new Intern(answers.name, answers.idNumber, answers.contact, answers.school);
        employeeList.push(newIntern);
        chooseAction();
    })
}

const init = () => {
    inquirer.prompt(managerQuestions).then(function (answers) {
       
        const newManager = new Manager(answers.name, answers.idNumber, answers.contact, answers.officeNumber);
        employeeList.push(newManager);
        chooseAction();
    })

}

const chooseAction = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            name: "action",
            choices: ["engineer", "intern", "I don't want to add another team member."]
        }
    ]).then(function (answers) {
        if (answers.action === "engineer") {
            console.log("engineer selected");
            runEngineer();
        } else if (answers.action === "intern") {
            console.log("intern selected");
            runIntern();
        } else {
            // add renderHTML function call here
            console.log(employeeList);
            
        }
    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. The fs npm package may have methods to check if a directory exists, and they
// may also have methods to create a directory that doesn't...

init()
