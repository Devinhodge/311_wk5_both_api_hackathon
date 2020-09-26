const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

//GETS ALL EMPLOYEES JEFF
router.get('/', employeesController.getAllEmployees);

router.get('/:emp_no', employeesController.getEmployeesById);

router.get('/firstname/:first_name/', employeesController.getEmployeesByFirstName);


module.exports = router;