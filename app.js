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
        type:"input",
        message: "what is your manager's name?",
        name: "name"
    },
    {
        type:"number",
        message: "What is your manager's ID?",
        name: "idNumber"
    },
    {
        type:"input",
        message: "What is your manager's email?",
        name: "contact"
    },
    {
        type:"number",
        message: "What is your manager's office number?",
        name: "officeNumber"
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "createNewProfile",
        choices: ["engineer", "intern", "I don't want to add another team member."]
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
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "createNewProfile",
        choices: ["engineer", "intern", "I don't want to add another team member."]
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
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "createNewProfile",
        choices: ["engineer", "intern", "I don't want to add another team member."]
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

const runEngineer = () => { inquirer.prompt(engineerQuestions).then(function(answers) {
    // add engineer answers to engineer class file
    if(answers.createNewProfile === "engineer") {
        console.log("engineer selected")
        runEngineer();
    } else if(answers.createNewProfile === "intern") {
        console.log("intern selected")
        runIntern();
    } else {
        // add renderHTML function call here
    }
})
}

const runIntern = () => { inquirer.prompt(internQuestions).then(function(answers) {
    // add engineer answers to engineer class file
    if(answers.createNewProfile === "engineer") {
        console.log("engineer selected")
        runEngineer();
    } else if(answers.createNewProfile === "intern") {
        console.log("intern selected")
        runIntern();
    } else {
        // add renderHTML function call here
    }
})
}

const init = () => { inquirer.prompt(managerQuestions).then(function(answers) {

    // add manager answers to manager class file, push to array ~somehow~

    if(answers.createNewProfile === "engineer") {
        console.log("engineer selected")
        runEngineer();
    } else if(answers.createNewProfile === "intern") {
        console.log("intern selected")
        runIntern();
    } else {
        // add renderHTML function call here
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
