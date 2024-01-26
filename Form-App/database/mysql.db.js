const mysql = require('mysql2');

const localhost = process.env.MYSQLHOST
const user = process.env.MYSQLUSER
const database = process.env.MYSQLDATABASE
const password = process.env.MYSQLPASSWORD

// Create the connection to database
const connectDB = mysql.createConnection({
  host: localhost,
  user: user,
  database: database,
  password: password
});

module.exports = connectDB

// const connectDb = async () => {
//   try {
//     await mysql.createConnection({
//       host: localhost,
//       user: user,
//       database: database,
//       password: password
//     });
    
//   } catch (err) {
//     console.error(err);
//   }
// }

// module.exports = connectDb
