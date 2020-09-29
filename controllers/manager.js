const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')


const getManager = (req, res) => {
  pool.query(`
  select dept_manager.dept_no, MAX(dept_manager.to_date) as CurrentManager, MAX(employees.first_name)as FIRST, MAX(employees.last_name) as LAST from employees.dept_manager
  join employees.employees on employees.emp_no=dept_manager.emp_no
  group by dept_manager.dept_no`, 
    (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}



module.exports = { getManager }