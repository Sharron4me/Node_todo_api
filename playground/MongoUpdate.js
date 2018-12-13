const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/NewApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect!!");
  }
  console.log("connected sucessfully!!");
  db.collection("Todos").findOneAndUpdate({
    _id:new ObjectId("5c0ea8cf70d579201d04f22a")
  },{
    $set:{
    text:"Play Games"
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  })

  db.close();
});
