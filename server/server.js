
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
      //  console.log('unable save the todo',e)
        res.send({status:false})
    })
})

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.post ('/user',(req,res) =>{
    let reqBody = req.body
    var user = new User({
        user:reqBody.user,
        email:reqBody.email
    })
    user.save().then((item)=>{
        res.send(item)
    }).catch((e)=>{
        console.log('err',e)
        res.send('failed to create user')
    })
})

console.log('node',process.env.NODE_ENV,'started')
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