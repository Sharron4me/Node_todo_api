const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/NewApp', (err,db) => {
  if(err){
    return console.log(`Unable to connect to database : ${err}`);
  }
  console.log('Connected To database sucessfully!!');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Food'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:"Eat Food"}).then((result)=>{
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed:true}).then((result)=>{
  //   console.log(result);
  // })
  db.close();
});
