const {MongoClient} = require('mongodb');
const yargs=require('yargs');

const Name_arg = {
  describe:'Name Of User',
  demand: true,
  alias:'n'
};
const Password_arg ={
  describe:'Password Of User',
  demand: true,
  alias:'p'
};
const argv = yargs
  .command('add',"Adding User",{
      Name:Name_arg,
      Password:Password_arg
  })
  .help()
  .argv;

MongoClient.connect("mongodb://localhost:27018/NewApp",(err,db)=>{
  if(err){
      return console.log("Unable to connect!");
  }
  console.log("Connected sucessfully to the database!");
  if(process.argv[2]=='add'){
      db.collection('User').insertOne({
        Name:argv.Name,
        Password:argv.Password
      }).then((result)=>{
        console.log(result.ops);
      });
    }
  else {
    console.log("Invalid Commad!");
  }
  db.close();
});
