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
    createdBy:{
      type:mongoose.Schema.ObjectId,
      ref:"users"
    },
 
     visitHistory:[{
      timeStamp:{ 
         type:Date,
        default:Date.now
      }
     }, ]
}, { timestamps: true })
const mongooseConfig=mongoose.model("url",urlScheema)
module.exports=mongooseConfig