const mongoose= require("mongoose");

const userScheema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
const mongooseConfig=mongoose.model('user',userScheema)
module.exports=mongooseConfig