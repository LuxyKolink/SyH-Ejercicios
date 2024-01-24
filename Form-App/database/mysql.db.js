// Get the client
require('dotenv/config')
const mysql = require('mysql2/promise');

const localhost = process.env.MYSQLHOST
const user = process.env.MYSQLUSER
const database = process.env.MYSQLDATABASE
const password = process.env.MYSQLPASSWORD

// Create the connection to database
const connectDB = async () => {
  try {
    await mysql.createConnection({
      host: localhost,
      user: user,
      database: database,
      password: password
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB

