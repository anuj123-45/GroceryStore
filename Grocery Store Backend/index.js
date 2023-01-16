const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
const userModel = require('./schema');

mongoose.connect("mongodb+srv://anuj_1358:Sc7H56ZBksq68suM@devtown.3dsdhuu.mongodb.net/Grocery?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection established");
})



app.post("/login",(req,res)=>{
    res.send("My api login");
})

app.post("/register",(req,res)=>{
   
   const {name,email,password}=req.body;
   userModel.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User already registered"})
    }
    else {
        userModel.create({
           name:name,
           email:email,
           password:password
           })
         
        //    userModel.save(err=>{
        //     if(err){
        //         res.send(err)
        //     }
        //     else {
        //         res.send({message:"Successfully Registered"});
             
        //     }
        //    })
    }
   })
 return res.json({"userdata":userModel});
})

app.listen(9092,()=>{
    console.log("Server running");
})