
const express = require('express')
const employeeCountController = require('../controllers/employeeCount')
const router = express.Router()

router.get('/', employeeCountController.getCount);

module.exports = router;