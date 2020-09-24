const mysql = require('mysql')
const pool = require('../sql/connections')


const getEmployees = (req, res) => {
  res.send('getting employees');
}






module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName }
