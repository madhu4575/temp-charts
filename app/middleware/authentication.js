const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenicateUser = (req,res,next) => { 
    const token = req.header('x-auth')
    let tokenData
    try{
        tokenData = jwt.verify(token,'temp')
        console.log(tokenData)
        User.findById(tokenData._id)
            .then((user) => {
                req.user = user
                next()
            })
            .catch((err) => {
                console.log(err)
                res.status(401).json(err)
            })
    }catch (e){
        res.status(401).json(e)
    }
}

module.exports = {
    authenicateUser
}