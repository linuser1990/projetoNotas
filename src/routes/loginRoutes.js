const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginController')
 
router.get('/logout',controller.logoutAccount)
router.get('/createAccount',controller.createAccount)
router.get('/',controller.showViewLogin)
router.post('/',controller.validaLogin)


module.exports = router