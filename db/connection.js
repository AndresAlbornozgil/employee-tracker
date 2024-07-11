const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '2212',
    database: 'hr_db',
    port: 5432
});

module.exports = pool;
