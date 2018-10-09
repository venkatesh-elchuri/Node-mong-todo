var {mongoose} = require('../db/mongooses');

var Todo = mongoose.model('todo',{
    text :{
       type : String,
       required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
  
  });

  module.exports = {
      Todo
  }