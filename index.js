const { prompt } = require('inquirer');
const dbConnection = require('./db/index.js');

function loadQuestions() {
    prompt([ 
    {
        type: 'list',
        name: 'choice',
        message: 'Which would you like to look at',
        choices: [
    
    {
        name: 'view all departments',
        value: 'view_departments'
    },
    {
        name: 'view all roles',
        value: 'view_roles'
    },
    {
        name: 'view all employees',
        value: 'view_employees'
    },
    {
        name: 'add a department',
        value: 'add_department'
    },
    {
        name: 'add a role',
        value: 'add_role'
    },
    {
        name: 'add an employee',
        value: 'add_employee'
    },
    {
        name: 'update an employee role',
        value: 'update_role'
    },
    {
        name: 'Quit',
        value: 'quit'
    },
],
},
])

.then((responses) => {
    console.log(responses);
    const choice = responses.choice;
    console.log(choice);

    switch(choice) {
        case 'view_departments':
        viewDepartments().then(loadQuestions);
        break;

        case 'view_roles':
        viewRoles().then(loadQuestions);
        break;

        case 'view_employees':
        viewEmployees().then(loadQuestions);
        break;

        case 'add_department':
        addDepartment();
        break;

        case 'add_role':
        addRole();
        break;

        case 'add_employee':
        addEmployee();
        break;

        case 'update_role':
        updateEmployeeRole();
        break;

        case 'quit':
        quit();
        break;

}});
};

loadQuestions()

// Functions
function viewDepartments() {
    // Database query will go here. GET routes
    return dbConnection.findAllDepartments().then((result) => {
        console.table(result.rows)
    })
}

function viewRoles() {
    // GET routes. some kind of join, perhapos only one.
    return dbConnection.findAllRoles().then((result) => {
        console.table(result.rows)
    })
}

function viewEmployees() {
    // GET routes & some kind of join, maybe multiple joints.
    return dbConnection.findAllEmployees().then((result) => {
        console.table(result.rows)
    })
}

function addDepartment() {
    // Ask for department name
    // Run dbconnection.addDepartment
}

function addRole() {
    // Ask for tile
    // Ask for salary
    // Ask for department_id
    // Run dbconnection.addDepartment

}

function addEmployee() {
    // Ask for first_name
    // Ask for last_name
    // Ask for role_id
    // Ask for manager_id
    // Run dbconnection.addDepartment

}

function updateEmployeeRole() {
    // Pick Employee
    // Ask for new role
}
