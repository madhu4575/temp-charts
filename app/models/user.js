const mongoose = require('mongoose')
const {default: isEmail} = require('validator/lib/isEmail')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        minlength:[4,'username must be minimum 4 characters long'],
        maxlength:[64, 'username should not be more than 64 characters long'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        lowercase:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:[8, 'password must be minimum 8 characters long'],
        maxlength:[128, 'password should not be more than 128 characters long']
    }
},{ timestamps: true })

userSchema.pre('save', function(next){
    const user = this 
    return bcryptjs.genSalt()
            .then((salt) => {
               return bcryptjs.hash(user.password, salt)
                    .then((encrypted) => {
                        user.password = encrypted
                        next()
                    })
            })
})

const User = mongoose.model('User', userSchema)

module.exports = User