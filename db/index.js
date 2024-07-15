const connection = require('./connection');

class DatabaseConnection {
    constructor() {

    }

    async query(query, args = []) {
        const link = await connection.connect()
        const result = await link.query(query, args)
        link.release()
        return result;
    }

    findAllDepartments() {
        return this.query(`SELECT * FROM department`)
    }

    findAllEmployees() {
        return this.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS role_name, role.salary, manager.first_name AS manager_first, manager.last_name AS manager_last FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN employee AS manager ON employee.manager_id = manager.id`)
    }

    findAllRoles() {
        return this.query(`SELECT role.id, role.title, role.salary, department.name FROM role
            JOIN department ON role.department_id = department.id`)
    }

    addDepartment() {
        
    }


    addRole() {
        
    }


    addEmployee() {
        
    }


    updateEmployeeRole() {
        
    }

}

module.exports = new DatabaseConnection();
