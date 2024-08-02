const express = require('express')
const {  login,forgetPassword, register } = require('../controllers/userController')
const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forgetpassword',forgetPassword)

module.exports = router