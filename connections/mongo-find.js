//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb')

//if you want to search with direclly with _id because it's not a just string
 var newId = new ObjectId('5b87780d8717673450f3ab47')

MongoClient.connect(`mongodb://localhost:27017/mono-test-db`,
{ useNewUrlParser: true },(err,client)=>{
    var db = client.db('mono-test-db');
    if(err){
        return console.log('unable connect to the data base',err)
    }
    console.log('successully connect to the database');
    db.collection('user').find({_id:newId}).toArray().then((result)=>{
        console.log(JSON.stringify(result))
    })
    db.collection('user').find().count().then((count)=>{
        console.log(count)
    })
 
    client.close()
})
 