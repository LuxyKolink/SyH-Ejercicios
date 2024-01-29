const connectDB = require('../database/mysql.db');

const getAll = async () => {
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

const getById = async (id) => {
  return new Promise((res, rej) => {
    connectDB.query('SELECT * FROM User WHERE id = ?', id, (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(result)
    })
  })
}

const create = async (data) => {
  return new Promise((res, rej) => {
    connectDB.query('INSERT INTO User set ?', [data], (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(result)
    })
  })
}

const update = async () => {
  console.error('Method not implemented.');
}

const deleteOne = async () => {
  console.error('Method not implemented');
}

module.exports = {
  getAll,
  getById,
  create
}