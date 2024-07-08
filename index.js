const { prompt } = require('inquirer');


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
        value: ''
    },
    {
        name: 'view all employees',
        value: ''
    },
    {
        name: 'add a department',
        value: ''
    },
    {
        name: 'add a role',
        value: ''
    },
    {
        name: 'add an employee',
        value: ''
    },
    {
        name: 'update an employee role',
        value: ''
    },
    {
        name: 'Quit',
        value: ''
    },
],
},
]).then((responses) => {
    console.log(responses);
    const choice = responses.choice;
    console.log(choice);

    switch(choice) {
        case 'view_departments':

        viewDepartments();
        break;
})

};


