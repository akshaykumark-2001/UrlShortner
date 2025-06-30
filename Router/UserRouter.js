const express=require("express")
const router=express.Router()
const User=require("../Controller/UserController")


router.post('/register',User.registerUser)
router.get('/register',async(req,res)=>{
return res.render("register")
})
router.post('/login',User.creteLogin)
router.get('/login',async(req,res)=>{
return res.render("login")
})
module.exports=router