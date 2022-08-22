const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tempSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
    ,temperature:[{
        time:{
            type:Number,
            required:true
        },
        degree:{
            type:Number,
            required:true
        }
    }]
})

const Temp = mongoose.model('Temp',tempSchema)

module.exports = Temp