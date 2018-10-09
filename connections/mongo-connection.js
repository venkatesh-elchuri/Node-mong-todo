const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(`mongodb://localhost:27017/mono-test-db`,
{ useNewUrlParser: true },(err,client)=>{
    var db = client.db('mono-test-db');
    if(err){
        return console.log('unable connect to the data base',err)
    }
    // db.collection('user').insertMany([{
    //     user:'venkatesh',
    //     age:24
       
    //  },{ user:'venky',
    //      age:28
    
    // },{ user:'venkatesh',
    //      age:22
    
    // },{ user:'ashok',
    // age:25

    // }],(err,result)=>{
    //      console.log(result)
    //  }); 

    //  db.collection('user').insertOne({
    //      user:'venkatesh',
    //      age:24
        
    //   },(err,result)=>{
    //       console.log(result)
    //   }); 

    var users = db.collection('user').find().toArray().then((result)=>{
        console.log(JSON.stringify(result,null,2))
    })
   // console.log(users)
    console.log('successully connect to the database');

    client.close()
})

//mongodb://venky99513:venky@99513@ds115219.mlab.com:15219/node-api-test

//mongodb://venky99513:venky%4099513@ds115219.mlab.com:15219/node-api-test