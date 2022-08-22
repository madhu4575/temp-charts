const Temp = require('../models/temprature')
const tempController = {}

tempController.list = (req, res) => {
    Temp.find({ user: req.user._id })
        .then((temp) => {
            res.json(temp)
        })
        .catch((err) => {
            res.json(err)
        })
}

tempController.show = (req,res) => {
    const id = req.params.id
    Temp.findOne({user: req.user._id })
        .then((temp) => {
            if(temp){
                res.json(temp)
            }
            else{
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err.message)
        })
}

tempController.create = (req,res) => {
    const body = req.body
    const temprature = new Temp(body)
    temprature.user = req.user._id
    temprature.save()
        .then((temp) => {
            res.json(temp)
        }) 
        .catch((err) => {
            res.json(err.message)
        })
}

// Only for editing purpose 
tempController.update = (req,res) => {
    const body = req.body
    const id = req.params.id
    Temp.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true, runValidators: true })
        .then((temp) => {
            res.json(temp)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = tempController