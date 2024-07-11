const connection = require('./connection');

class DatabaseConnection {
    constructor() {

    }

    async query(pikachu, args = []) {
        const link = await connection.connect()
        const result = await link.query(pikachu, args)
        link.release()
        return result;
    }

    findAllDepartments() {
        return this.query('SELECT * FROM department')
    }
}

module.exports = new DatabaseConnection();
