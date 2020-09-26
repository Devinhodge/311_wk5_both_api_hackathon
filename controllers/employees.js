const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')

  // SELECT ALL EMPLOYEES JEFF 
  //THIS ROUTE WAS CHECKED AND IS WORKING
const getAllEmployees = (req, res) => {
  pool.query(`SELECT * FROM employees LIMIT 100`, 
    (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}
//GET BY EMPLOYEE NUM ULESSYS
//TESTE ENDPOINT AND IS WORKING
const getEmployeesById = (req, res) => {
    // SELECT USER BY ID
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  
  sql = mysql.format(sql, [req.params['emp_no']])
  
  pool.query(sql, (err, rows) => {
    return res.json(rows);
  })
}

const getEmployeesByFirstName = (req, res) => {
  //should go here devin
}



module.exports = { getAllEmployees, getEmployeesById, getEmployeesByFirstName }

