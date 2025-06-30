const express=require('express')
const router=express.Router()
const Url=require("../Model/UrlScheema")
const verify=require('../MiddleWare/jwtToken')
router.get('/',verify,async(req,res)=>{
   try {const allUrl= await Url.find({ createdBy:req.user.id })
    res.render("home",{
        allUrl,
        ShortId:null
    })}
    catch(err){
        console.log(err);
        res.status(401).send('error ios ghapenin')
        
    }
})
module.exports=router
