const express = require('express')
const router = express.Router()
const controller = require('../controllers/notesController')
const loginController = require('../controllers/loginController')

router.use(loginController.isAuthenticated)

router.get('/getNotes',controller.getAllItems)
router.get('/',controller.showNotes)

module.exports = router