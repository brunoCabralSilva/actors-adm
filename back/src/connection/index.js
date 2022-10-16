const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  port: 3306,
  database: 'sakila',
  user: 'root',
  password: 'root',
});

module.exports = connection;