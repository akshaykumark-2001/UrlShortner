const express=require("express")
const router=express.Router()
const urlController=require("../Controller/urlController")
const verify=require('../MiddleWare/jwtToken')

router.post("/url",verify,urlController.createUrl)
router.get("/:id",urlController.getUrlConroller)
module.exports=router