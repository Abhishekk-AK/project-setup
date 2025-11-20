const express = require('express')
const router = express.Router()

const { createUser, getUserDetails } = require('../controller/User')

router.post('/profile', createUser)
router.get('/all-users', getUserDetails)

module.exports = router