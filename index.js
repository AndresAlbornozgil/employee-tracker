const { prompt } = require('inquirer');
const dbConnection = require('./db/queries');

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
        value: 'add_note'
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
        viewDepartments();
        break;

        case 'view_roles':
        viewRoles();
        break;

        case 'view_employees':
        viewEmployees();
        break;

        case 'add_department':
        addDepartment();
        break;

        case 'add_note':
        addNote();
        break;

        case 'add_employee':
        addEmployee();
        break;

        case 'update_role':
        updateRole();
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
    dbConnection.findAllDepartments().then((result) => {
        const departments = result.rows
        console.table(departments)
    })
}

function viewRoles() {
    // GET routes. some kind of join, perhapos only one.
}

function viewEmployees() {
    // GET routes & some kind of join, maybe multiple joints.
}

function addDepartment() {
    // Additional inquirer prompt needed, then will do database query. POST route
}

function addNote() {
    // POST route
}

function addEmployee() {
    // POST route
}

function updateRole() {
    // PUT route will be used here. More inquirer prompts.
}
