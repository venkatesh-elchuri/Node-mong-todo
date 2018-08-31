//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb')


MongoClient.connect(`mongodb://localhost:27017/mono-test-db`,
{ useNewUrlParser: true },(err,client)=>{
    var db = client.db('mono-test-db');
    if(err){
        return console.log('unable connect to the data base',err)
    }
    console.log('successully connect to the database');
   
    //findOneandUpdate

    // db.collection('user').findOneAndUpdate({
    //     user:'ashok22'
    // },
    // {
    //     $set : { user : 'ashok'}
    // },{
    //     returnOriginal :false //if true returns before updated value
    //     //if false it returns update document
    // }).then((res)=>{
    //     console.log(res)
    // })

    //we have

    //updateMany and updateOne
     
     db.collection('user').updateMany({
         age:75
     },{
         $inc : {age: -25 }
     },{ returnOriginal : false}).then((result) =>{
         console.log(JSON.stringify(result))
     })
     
    //updateOne 

    db.collection('user').updateOne({
        age:28
    },{
        $set : {user:'ashok55'}
    }).then((Result)=>{
        console.log(JSON.stringify(Result))
    })
 
   // client.close()
})
 