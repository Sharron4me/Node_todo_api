const mongoose = require('mongoose');

var user = mongoose.model('User',{
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

module.exports ={user};
