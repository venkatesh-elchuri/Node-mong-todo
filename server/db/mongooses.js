const mongoose = require('mongoose');
var uri= '';

if(process.env.NODE_ENV == 'development'){
    uri = 'mongodb://localhost:27017/test';
}else if(process.env.NODE_ENV == 'production'){
    uri  = 'mongodb://venky99513:venky%4099513@ds115219.mlab.com:15219/node-api-test';
}
 
mongoose.connect(uri,{ useNewUrlParser: true },()=>{
    console.log('success fully connected to db')
})
mongoose.set('useCreateIndex', true)
module.exports = {
    mongoose
}