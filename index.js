require('dotenv').config()
const express=require("express")
const app=express()
const path=require('path')
require('./DB/Connect')

const router=require('./Router/route') 
const StaticRouter=require("./Router/StaticRouter")
const userRouter=require('./Router/UserRouter')
const cookieParser = require('cookie-parser')
  
app.set('view engine', 'ejs')
app.set('views',(path.join(__dirname,"View")))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use(StaticRouter)
app.use(userRouter)
app.use(router)


app.listen(4000,()=>{
    console.log('server started at port 4000');
    
})