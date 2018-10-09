var {mongoose} = require('../db/mongooses');

var User = mongoose.model('User',{
    user:{
          type:String,
          minlength:1
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

module.exports = {
    User
}