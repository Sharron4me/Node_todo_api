const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/NewApp', (err,db) => {
  if(err){
    return console.log(`Unable to connect to database : ${err}`);
  }
  console.log('Connected To database sucessfully!!');

  // db.collection("Todos").find({
  //   _id:new ObjectID('5c0ea8c6bfb0881ff16d74a8')
  // }).toArray().then((docs)=>{
  //     console.log("Todos:");
  //     console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Unable to fetch");
  // });

  db.collection("Todos").find().count().then((count)=>{
      console.log(`todos Count ${count}`);
  },(err)=>{
    console.log("Unable to fetch");
  });

  db.close();
});
