const express=require('express')
const router=express.Router()
const Url=require("../Model/UrlScheema")
router.get('/',async(req,res)=>{
   try {const allUrl= await Url.find({})
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
