const mysql = require('mysql')
const pool = require('../sql/connections')


const getEmployees = (req, res) => {
  res.send('getting employees');
}


  const getEmployeesById = (req, res) => {
    // SELECT USER BY ID
    let sql = "SELECT * FROM employees WHERE emp_no = ?"
  
    sql = mysql.format(sql, req.params['emp_no'])
  
    pool.query(sql, (err, rows) => {
      return res.json(rows);
    })
  }


  module.exports = {
    getEmployees,
    getEmployeesById
  }