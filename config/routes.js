const express = require('express')
const router = express.Router()

const { authenicateUser } = require('../app/middleware/authentication')
const userController = require('../app/controllers/userController')
const tempController = require('../app/controllers/tempController')

router.post('/temp-charts/user/register',userController.register)
router.post('/temp-charts/user/login',userController.login)
router.get('/temp-charts/user/account',authenicateUser,userController.account)

// router.get('/temp-charts/show-data',authenicateUser,tempController.show)
router.post('/temp-charts/add-data',authenicateUser,tempController.create)
router.get('/temp-charts/data-list',authenicateUser,tempController.list)
router.put('/temp-charts/update-data/:id',authenicateUser,tempController.update)

module.exports = router