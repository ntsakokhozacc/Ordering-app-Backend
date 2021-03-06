const mongooose = require('mongoose')

const UserSchema = new mongooose.Schema({
    email:{
        type:String,
        required:[true,'Please enter an email address']
    },
    firstName:{
        type:String,
        required:[true, 'Please enter a first name']
    },
    lastName:{
        type:String,
        required:[true,'Please enter a password']
    },
    password:{
        type:String,
        required:[true, 'Please enter your password']
    },
    service:{
        type:String,
        required:[true,'Please enter a service']
    },
    bio:{
        type:String,
        required:[true,'Please enter a bio']
    },
    pic: {
        type:String,
        required:[true, 'Please enter a picture url']
    }

})

module.exports = mongooose.model('User', UserSchema)