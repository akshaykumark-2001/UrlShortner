const mongoose=require("mongoose")
const connectionString=process.env.connectionString
mongoose.connect(connectionString).then(()=>{
    console.log('connected to database');
    
}).catch((err)=>{
    console.log("Some error is happened");
    
})