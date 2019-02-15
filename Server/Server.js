const express = require('express');
const bodyParser= require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo}=require('./models/Todo');
var {user}=require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todos= new Todo({
     text:req.body.text
   });
  todos.save().then((doc)=>{
    res.send(doc);
    console.log(doc);
  },(err)=>{
    res.send(err);
    console.log(err);
  });
});
app.listen(3000,()=>{
  console.log("Started On Port 3000!");
});
module.exports = {app};
