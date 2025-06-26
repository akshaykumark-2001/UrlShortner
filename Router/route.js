const express=require("express")
const router=express.Router()
const urlController=require("../Controller/urlController")
router.post("/url",urlController.createUrl)
router.get("/:id",urlController.getUrlConroller)
module.exports=router