const express = require('express')
const route = express.Router()
const loginController = require('../controllers/loginController')
const createAccountController = require('../controllers/createAccount')

route.get('/',loginController.isAuthenticatedCreateAccount,createAccountController.redirectPage)

module.exports = route