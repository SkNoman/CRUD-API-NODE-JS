const db = require('../db')
const jwt = require('jsonwebtoken')

module.exports = {
    async loginUser(req,res){
        const phone = req.body.phone
        const password = req.body.password
        const user_info = await db.from('users').where({phone: phone, password: password}).first()
        
        try{
            if(user_info){
                const token = jwt.sign({
                    phone: user_info.phone
                },process.env.ACESSS_TOKEN_SECRET
                ,{expiresIn:3600}) //1 HOUR
                return res.status(200).json({token})
            }else{
                return res.status(401).json({message: 'Invalid username or password'})
            }
        }catch(error){
            console.log(error)
            return res.status(500).json({message: 'Someting went wrong'})
        }
    }
}