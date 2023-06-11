const db = require('../db')

module.exports = {
    //REGISTER USER
    async registerUser(req,res){
        try{
            console.log("phone",req.body.phone.length)
            if(req.body.phone.length < 11){
                return res.status(408).json({message: 'Please enter valid phone number'})
            }
            else if(req.body.phone.length > 11){
                return res.status(408).json({message: 'Please enter valid phone number'})
            }
            else if(req.body.username.length < 4){
                return res.status(408).json({message: 'Username have to contain 4 digit minimum'})
            }
            else if(req.body.username.length > 10){
                return res.status(408).json({message: 'Username maximum length is 10 character'})
            }
            else if(req.body.password.length < 6){
                return res.status(408).json({message: 'Password have to contain 6 digit minimum'})
            }
            else{
                await db('users')
                .insert({
                    phone: req.body.phone,
                    username: req.body.username,
                    password: req.body.password,
                })
                return res.status(200).json({status: 'Success', message: 'User registerd successfully'})
            }
   
        }catch(error){
            console.log(error)
            return res.status(500).json({status: 'Error',message: 'Something went wrong'})
        }
    },
    //MAIN MENU LIST
    async getMainMenu(req,res){
        try{
            const data = await db.select('menuId','menuTitle','menuImage').from('main_menu').where('isActive', '=',1);
            return res.status(200).json({menus:data});
        }catch(error){
            console.log(error);
            return res.status(500).send('Something went wrong');
        }
    },

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
            
            const data = await db.select('carId', 'carName', 'carType')
            .select(db.raw('COALESCE(NULLIF(carImage, ""), "https://www.shutterstock.com/image-illustration/3d-rendering-brandless-generic-concept-260nw-430847767.jpg") as carImage'))
            .from('carlist')
            .where('isActive', '=', 1);

return res.status(200).json({ carlist: data });

        }catch(error){
            console.error(error)
            return res.status(500).send('Something went wrong')
        }
    },
    //UPDATE CARS
    async updateCars(req,res){
        try{
            const car_id = req.body.car_id
            await db('carlist')
            .update({
                carName: req.body.car_name,
                carType: req.body.car_type
            }).where({carId: car_id})
            let updatedData = await db('carlist').where({carId:car_id})
            return res.status(200).json({updatedData: updatedData})
        }catch(error){
            console.log(error)
        }
    },
    //DELETE CARS
    async deleteCars(req,res){
        try{
            const car_id = req.body.car_id
            await db('carlist').del().where({carId: car_id})
            return res.status(500).send({status: 'Success', message: 'Car Deleted Successfully'})
        }catch(error){
            console.log(error)
        }
    },
    //GET USERS CARS LIST
    async getUsersCarList(req,res){
        try{
            // db.select('carlist.carName','users.username').from('carlist')
            // .join('users','users.id','carlist.id')
            // .then(rows =>{
            //     console.log(rows)
            // })

            await db('carlist').select('carlist.carName','users.username')
            .innerJoin('users','users.id','carlist.id')
            .then(rows =>{
                console.log(rows)
                return res.status(200).json({rows})
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Something went wrong'})
        }
    },
    async getLocalDbInfo(req,res){
        try{
            const data = await db.select('dbVersion').from('local_db_info')
            return res.status(200).send(data)
        }catch(error){
            return res.status(500).json({message: 'Something went wrong'})
        }
      
    }
    
}