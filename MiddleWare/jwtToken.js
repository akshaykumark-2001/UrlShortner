const jwt=require("jsonwebtoken")
const verify=(req,res,next)=>{
     console.log("Cookie token:", req.cookies.token);
    const token =req.cookies.token;
    if(!token) return res.redirect('/login')
        try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.user=decoded
          console.log("Decoded JWT:", decoded);
          next();
    }
    catch(err){
           return res.status(403).send("Invalid token.");

    }
}

module.exports = verify;