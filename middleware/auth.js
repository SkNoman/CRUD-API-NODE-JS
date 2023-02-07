const jwt = require('jsonwebtoken')

const auth = async (req,res,next) =>{
    if(req.headers.authorization==undefined) return res.status(400).json({message: 'bearer token is required'})
    const token = req.headers.authorization.split(' ')[1]

    try{
        jwt.verify(token,process.env.ACESSS_TOKEN_SECRET)
        next()
    }catch(error){
        console.error(error)
        if(error.message == 'invalid signature') return res.status(401).json({message: 'invlid token'})
        if(error.message == 'jwt expired') return res.status(401).json({message: 'token expired'})
        return res.status(500).json({message: 'Someting went wrong'})
    }
}

module.exports = auth