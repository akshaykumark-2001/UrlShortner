const mongoose=require("mongoose")
const urlScheema=new mongoose.Schema({
     originalUrl:{
        type:String,
        required:true
     },
     ShortId:{
        type:String,
        required:true
     },
     visitHistory:[{
      timeStamp:{ 
         type:Date,
        default:Date.now
      }
     }]
})
const mongooseConfig=mongoose.model("url",urlScheema)
module.exports=mongooseConfig