const mongoose =  require('mongoose');

const UserSchema =  new mongoose.Schema({
  name : {type : String , required : true},
  phone : {type : Number , required : true},
  school : {type : String , required : true},
  classes : {type : Number , required : true},
  roll : {type : Number , required : true},
  address : {type : String , required : true},
}, {timestamps:true});

const User = mongoose.model('user' , UserSchema);

module.exports = User;