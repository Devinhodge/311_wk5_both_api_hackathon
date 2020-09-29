
const express = require('express')
const employeeSalariesController = require('../controllers/salaries')
const router = express.Router()

router.get('/', employeeSalariesController.getSalaries);

module.exports = router;