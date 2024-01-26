const connectDB = require('../database/mysql.db');

const getUsers = async () => {
  return new Promise((res, rej) => {
    connectDB.query('SELECT * FROM User', (err, results) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(results)
    });
  })

}

module.exports = {
  getUsers
}