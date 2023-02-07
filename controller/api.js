const db = require('../db')

module.exports = {
    //INSERT NEW CAR
    async insertCar(req,res){
        try{
            await db('carlist')
            .insert({
                carId: req.body.car_id,
                carName: req.body.car_name,
                carType: req.body.car_type
            })
            return res.status(200).json({status:'Success', message: 'New Car Inserted'})
        }catch(error){
            console.log(error)
            return res.status(500).send('Someting went wrong')
        }
    },

    //GET ALL CAR LIST
    async getAllCars(req,res){
        try{
            const data = await db.select().from('carlist')
            return res.status(200).json({carlist:data})
        }catch(error){
            console.error(error)
            return res.status(500).send('Something went wrong')
        }
    }
}