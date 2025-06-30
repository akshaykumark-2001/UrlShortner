const User=require("../Model/UserSchema")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const registerUser=async(req,res)=>{
 try{ 
    const {username,email,password}=req.body
     console.log(username,email,password);
    if(!username||!email||!password) return res.status(401).send("fill the coloms")
      console.log(username,email,password);
      
    const exsistingUser= await User.findOne({email})
    

  const hashedPassword = await bcrypt.hash(password, 10)
    if(exsistingUser) return res.status(402).send('This person is already registered')
    const newUser=new User({
   username,
   email,
   password:hashedPassword
})
const savedUser= await newUser.save()
return res.redirect('/login')
     

    }catch(err){
        console.log(err);
        return res.status(402).send("some thing went wrong")
        
}

}

const creteLogin=async(req,res)=>{
  const {email,password}=req.body
  const loginUser= await User.findOne({email})
  if(!loginUser) return res.status(401).send('error  check user word and pasword')
     const validPass = await bcrypt.compare(password, loginUser.password)

     if (!validPass) return res.status(401).send('Invalid password')
      const token=jwt.sign({id:loginUser._id,
        email:loginUser.email
    },process.env.SECRET_KEY)
    res.cookie("token",token)
    res.redirect('/')

}


module.exports={
    registerUser,
    creteLogin
}