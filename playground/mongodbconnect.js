// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/NewApp', (err,db) => {
  if(err){
    return console.log(`Unable to connect to database : ${err}`);
  }
  console.log('Connected To database sucessfully!!');
  db.collection('Todos').insertOne({
    Name:"Ummair",
    Age:23
  },(err,result)=>{
    if(err) return console.log('Unable to insertOne ',err);
    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();
});
