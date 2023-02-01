const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Questions prompted to user
const teamArray = [];
const addManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Manager name?'
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this manager's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is this manager's office number"
            }
        ])
        .then(managerInput => {
            const { name, id, email, officeNum } = managerInput;
            const manager = new Manager(name, id, email, officeNum);
            teamArray.push(manager);
            console.log(manager);
        })
};