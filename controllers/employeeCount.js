const mysql = require('mysql')
const pool = require('../sql/connections')
const { handleSQLError } = require('../sql/error')


const getCount = (req, res) => {
  pool.query(`
  select count(employees.emp_no) as EMP_COUNT, dept_emp.dept_no from employees.employees
  join employees.dept_emp on employees.emp_no=dept_emp.emp_no
  where dept_emp.to_date='9999-1-1'
  group by dept_no`, 
    (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}




module.exports = { getCount }