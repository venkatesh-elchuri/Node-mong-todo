var {mongoose} = require('../db/mongooses');
const validator = require('validator');

var User = mongoose.model('User',{
    // user:{
    //       type:String,
    //       minlength:1
    // },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true,
        validate: {
          validator:  validator.isEmail,
          'message': props => `${props.value} is not valid email`
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true,
        },
        token:{
            type:String,
            required:true
        }
    }]
})

module.exports = {
    User
}