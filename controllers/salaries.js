const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')


const getSalaries = (req, res) => {
  pool.query(`select titles.title, MIN(salaries.salary), MAX(salaries.salary) from employees.titles
  join employees.salaries on salaries.emp_no=titles.emp_no
  group by titles.title`, 
    (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = { getSalaries }