const express = require('express')
const router = express.Router()
const loginController = require('../controller/login')
const contoller = require('../controller/api')
const auth = require('../middleware/auth')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

//LOGIN
router.post('/login',loginController.loginUser)
//INSERT NEW CAR
router.post('/insert',auth,contoller.insertCar)
//GET CAR LIST
router.get('/get-allcars',auth,contoller.getAllCars)
//UPDATE CAR
router.put('/update-car',contoller.updateCars)
//DELETE CARS
router.delete('/delete-cars',contoller.deleteCars)


module.exports=router;