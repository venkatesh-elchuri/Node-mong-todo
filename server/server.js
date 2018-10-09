
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongooses');
const {Todo} = require('./models/todos')
const {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((item)=>{
        console.log(item)
        res.send(item)
    },(e)=>{
        console.log('unable save the todo',e)
    })
})
app.listen(3000,()=>{
    console.log('server satred on 3000')
})



// var newUser = new User({
//      //email: 'venkatesh@gamil.com   '
// })

// // newUser.save().then((result)=>{
// //         console.log('User insterd',result)
// //     },(err)=>{
// //         console.log('unable to save the User',err)
// //     })

// var newTodo = new Todo({
//    // text:'venkatesh',
//     completed:false
// })

// newTodo.save().then((result)=>{
//     console.log('todo saved',result)
// },(err)=>{
//     console.log('unable to save the todo',err)
// })