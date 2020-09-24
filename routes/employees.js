const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

router.get('/', employeesController.getAllEmployees);

module.exports = router;