const express = require('express')
const router = express.Router()
const loginController = require('../controller/login')
const contoller = require('../controller/api')
const auth = require('../middleware/auth')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

//LOGIN
router.post('/login',loginController.loginUser)
//GET MAIN MENU LIST
router.get('/main-menu',contoller.getMainMenu)
//INSERT NEW CAR
router.post('/insert',auth,contoller.insertCar)
//GET CAR LIST
router.get('/get-allcars',contoller.getAllCars)
//UPDATE CAR
router.put('/update-car',auth,contoller.updateCars)
//DELETE CARS
router.delete('/delete-cars',auth,contoller.deleteCars)
//REGISTER USER
router.post('/register',contoller.registerUser)
//GET USERS CARS LIST
router.get('/users-cars-list',auth,contoller.getUsersCarList)
//GET LOCAL DB INFO
router.get('/local-db-info',contoller.getLocalDbInfo)


module.exports=router;