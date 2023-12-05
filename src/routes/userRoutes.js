const express = require('express')
const route = express.Router()
const controller = require('../controllers/userController')
const loginController = require('../controllers/loginController')


//route.use(loginController.isAuthenticated)

route.get('/',loginController.isAuthenticated,controller.getAllItems)
route.post('/',controller.addItem)

module.exports = route