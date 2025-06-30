const { nanoid } = require('nanoid')
const Url=require('../Model/UrlScheema')

const createUrl=async(req,res)=>{
  try{
    const{originalUrl}=req.body;
  if(!originalUrl) return res.status(401).send('provusw an url')
      const existing = await Url.findOne({ originalUrl, createdBy: req.user.id});
   
    if (existing) {
      const allUrl = await Url.find({ createdBy: req.user.id });
      return res.render('home', {
        allUrl,
        ShortId: existing.ShortId,
        createdBy: req.user.id
      });
    }
  const  ShortId=nanoid(8)
  await Url.create({
     ShortId:ShortId,
     originalUrl:originalUrl,
      createdBy: req.user.id ,
      visitHistory:[]
  })
const allUrl = await Url.find({   createdBy: req.user.id  });
  res.render('home',{
    allUrl,
    ShortId,
    createdBy: req.user.id
  })

    
}
catch(err){
    console.log(err);
    res.status(401).send('an error is happen in the create url')
}
}
const getUrlConroller=async(req,res)=>{
      const id=req.params.id
      console.log("getid :",id);
      
 try {    const newUrl= await Url.findOneAndUpdate(
        { ShortId:id},
        {
     $push:{  visitHistory:{
            timeStamp:new Date()

           
        }}
      },
     { new: true }  )
     console.log("newgetUrl:",newUrl);
     
      if(!newUrl) return res.status(401).send("can't find the user ")

    res.status(301).redirect(newUrl.originalUrl)}
    catch(err){
      console.log(err);
    return res.status(401).send('error is happened')
      
    }

}
module.exports={
    createUrl,
    getUrlConroller
}