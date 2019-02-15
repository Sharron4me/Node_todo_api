const Mongoose = require('mongoose');

Mongoose.connect("mongodb://localhost:27018/NewTest")

var user = Mongoose.model('User',{
      username:{
        type:String,
        required:true,
        minlength:1
      },
      email:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
      }

});

var mail1 = new user({
    username:"Mohammad Ummair",
    email:"Hello THere"
});

mail1.save().then((doc)=>{
    console.log("Insertion SuccesFull!",doc);
},(err)=>{
  console.log(JSON.stringify(err,undefined,2));
})
