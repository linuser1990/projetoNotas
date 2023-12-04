const express = require('express')
const route = express.Router()
const controller = require('../controllers/userController')
const loginController = require('../controllers/loginController')


route.use(loginController.isAuthenticated)

route.get('/',controller.getAllItems)

module.exports = route