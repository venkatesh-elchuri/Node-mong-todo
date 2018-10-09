const mongoose = require('mongoose');
var uri= 'mongodb://venky99513:venky%4099513@ds115219.mlab.com:15219/node-api-test';
mongoose.connect(uri,{ useNewUrlParser: true })

module.exports = {
    mongoose
}