
const express = require('express')
const employeeManagerController = require('../controllers/manager')
const router = express.Router()

router.get('/', employeeManagerController.getManager);

module.exports = router;