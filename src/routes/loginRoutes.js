const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginController')
 

router.get('/',controller.showViewLogin)
router.get('/logout',controller.logoutAccount)
router.post('/',controller.validaLogin)


module.exports = router