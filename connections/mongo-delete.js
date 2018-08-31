//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb')

 var newId = new ObjectId('5b87780d8717673450f3ab47')

MongoClient.connect(`mongodb://localhost:27017/mono-test-db`,
{ useNewUrlParser: true },(err,client)=>{
    var db = client.db('mono-test-db');
    if(err){
        return console.log('unable connect to the data base',err)
    }
    console.log('successully connect to the database');
    //delete one
    // db.collection('user').deleteOne({user:'venkatesh'}).then((result)=>{
    //     console.log(JSON.stringify(result))
    // })
    
    //deleteMany
        // db.collection('user').deleteMany({age:24}).then((reslut)=>{
        //     console.log(reslut)
        // })
    //findOneAndDelete it gives an deleted document also
        db.collection('user').findOneAndDelete({user:'venkatesh'}).then((result)=>{
            console.log(result)
        })

    db.collection('user').find().count().then((count)=>{
        console.log(count)
    })
 
    client.close()
})
 