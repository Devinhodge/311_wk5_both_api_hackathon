const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')


const getAllEmployees = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM employees", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  module.exports = {
    getAllEmployees
  }