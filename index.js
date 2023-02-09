// packages needed
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createHTML = require("./src/createHTML.js");

// prompts for user input
const teamArray = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Team manager's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Team manager's email address:",
      },
      {
        type: "input",
        name: "officeNum",
        message: "Team mnager's office number:",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNum } = managerInput;
      const manager = new Manager(name, id, email, officeNum);
      teamArray.push(manager);
      console.log(manager);
      addTeamMember();
    });
};
// menu with the option to add engineer or intern or to finish building team
function addTeamMember() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Who do you want to add to your team?",
        choices: ["Intern", "Engineer", "My team is complete!"],
      },
    ])
    .then((data) => {
      if (data.teamMember === "Intern") {
        addIntern();
      }
      else if (data.teamMember === "Engineer") {
        addEngineer();
      }
      else {
        console.log("Team created!");
        fs.writeFileSync("./dist/index.html", createHTML(teamArray));
      }
    });
}
// if selection is engineer, prompted to enter the engineer’s name, ID, email, and GitHub username
// I am taken back to the menu
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email address:",
      },
      {
        type: "input",
        name: "GitHubUsername",
        message: "Engineer's GitHub username:",
      },
    ])
    .then((EngineerInput) => {
      const { name, id, email, github } = EngineerInput;
      const engineer = new Engineer(name, id, email, github);
      teamArray.push(engineer);
      console.log(engineer);
      addTeamMember();
    });
};
// if select intern, prompted to enter the intern’s name, ID, email, and school
// I am taken back to the menu
const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Intern's school:",
      },
    ])
    .then((InternInput) => {
      const { name, id, email, school } = InternInput;
      const intern = new Intern(name, id, email, school);
      teamArray.push(intern);
      console.log(intern);
      addTeamMember();
    });
};

// when team build is complete, exit application and corresponding input reflected in html
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// call funtion initializing app
addManager();
