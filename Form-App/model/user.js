const connectDB = require('../database/mysql.db');
const limit = process.env.LIMIT

const getAll = async (page) => {
  return new Promise((res, rej) => {
    const start = limit * (page - 1);
    const end = limit * page;
    connectDB.query('SELECT id, name, address FROM User LIMIT ?, ?', [start, end], (err, results) => {
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
    connectDB.query('SELECT id, name, address, phone, email FROM User WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      if (result.length !== 0) {
        res(result[0])
      } else {
        res(null)
      }
    })
  })
}

const create = async (data) => {
  return new Promise((res, rej) => {
    const { name, address, phone, email, psw } = data

    const newdata = {
      name,
      address: address || '',
      phone,
      email,
      psw
    }

    connectDB.query('INSERT INTO User set ?', [newdata], (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(result)
    })
  })
}

const update = async (data, id) => {
  return new Promise((res, rej) => {
    const { name, address, phone, email } = data

    const newdata = {
      name,
      address,
      phone,
      email,
      psw
    }

    connectDB.query('UPDATE User SET ? WHERE id = ?', [data, id], (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(result)
    })
  })
}

const deleteOne = async (id) => {
  return new Promise((res, rej) => {
    connectDB.query('DELETE FROM User WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error(err);
        rej(err)
        return;
      }
      res(result)
    })
  })
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne
}