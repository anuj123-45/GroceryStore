const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const userModel= new  mongoose.model("groceryrecords",userSchema);
module.exports=userModel;