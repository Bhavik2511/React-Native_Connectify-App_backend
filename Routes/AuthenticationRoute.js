const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt")
// Import the User model
require("../modals/User");
const User = mongoose.model("User");

const jwt = require("jsonwebtoken");
require("dotenv").config();

require("../modals/UserData")
const Userdata = mongoose.model("UserData")

// this is the mailer function responsible for sending mail
async function mailer(receivemail, code) {
  // console.log('mailer function called')
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, //true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: process.env.NOD_EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  //  now we are sending mail
  let info = await transporter.sendMail({
    from: `"Connectify" <${process.env.NOD_EMAIL}>`, // sender address
    to: receivemail, // list of receivers
    subject: "Verification Code", // Subject line
    text: `Your Verification code is ${code}`, // plain text body
    html: `Your Verification code is <b>${code}</b>`,
  });
  console.log("Message sent: %s", info.messageId);
  console.log("URL: %s", nodemailer.getTestMessageUrl(info));
}

// this is the router we are making to verify.
router.post("/verify", async (req, res) => {
  console.log(req.body);
  const { email } = req.body; //extracting  email from body

  if (!email) {
    return res.status(422).send({ error: "Please provide an email." });
  } else {
    User.findOne({ email: email }).then(async (saveduser) => {
      if (saveduser) {
        return res
          .status(422)
          .json({ error: "Invalid Credentials" });
      }
      try {
        let verificationcode = Math.floor(100000 + Math.random() * 900000); // we ar generating 6 digit verification code here
        await mailer(email, verificationcode);
        return res
          .status(200)
          .json({
            message: "Email sent successfully",
            verificationcode,
            email,
          });
      } catch (error) {
        return res
          .status(400)
          .send({ error: `Error with sending Email : ${error}` });
      }
    });
  }
});

router.post("/usernamechange", async(req, res)=>{
    const {username, email} = req.body
    User.find({username}).then(async(saveduser)=>{
        if(saveduser.length > 0){
            return res.status(422).json({error: "Username alreday exist"})
        }
        else{
            return res.status(200).json({message: "Username Avaialable", username, email})
        }
    })
})

router.post("/signup", async(req, res)=>{
   const {name, username, email, password }=req.body
   if(!name ||!username ||  !password || !email){
    return res.status(422).json({error:"Missing fields!"})
   }
   else{
    const user = new User({ 
        name,
        username,
        email, 
        password
    })
    try{
        await user.save();
        const token = jwt.sign({_id: user._id}, process.env.jwt_secret)
        return res.status(200).json({message: "User Registered Successfully", token})
    }
    catch(error){
        console.log(error)
        return res.status(422).json({error: "Failed to Register User"})
    }

   }

})

router.post("/forgotpassword", async (req, res) => {
  console.log(req.body);
  const { email } = req.body; //extracting  email from body

  if (!email) {
    return res.status(422).send({ error: "Please provide an email." });
  } else {
    User.findOne({ email: email }).then(async (saveduser) => {
      if (saveduser) {
        try {
          let verificationcode = Math.floor(100000 + Math.random() * 900000); // we ar generating 6 digit verification code here
          await mailer(email, verificationcode);
          return res.send({
            message: "Verification Code sent to your Email",
            verificationcode, email
          })
            

        } catch (error) {
          console.log(error)
        }
      }
      else{
        return res.status(422).json({error: "Email Didn't Match, to Registered Email"})
      }
      
    });
  }
});

router.post("/passreset", (req, res) =>{
  const {email, password} = req.body

  if(!email || !password){
    return res.status(422).json({error:"please enter all fields"})
  }
  else{
    User.findOne({email: email})
    .then(async(saveduser)=>{
      if(saveduser){
        saveduser.password = password  
        saveduser.save()
       .then(user =>{
        res.json({message: "Password Changed Successfully"})
       })
       .catch(error =>{console.log(error)})
      }
      else{
        return res.status(422).json({error: "Invalid Credentials"})
      }
    })
  }
});

router.post("/login", (req, res) =>{
  const {email, password } = req.body
  
  if(!email || !password){
    return res.status(422).json({ error : "Please provide an email and a password."})
  }
  else{
    User.findOne({email: email})
      .then(saveduser=>{
        if(!saveduser){
          return res.status(422).json({ error : "No user found with that email address."})
        }
        else{
          console.log(saveduser)
          bcrypt.compare(password, saveduser.password)
          .then(
            match =>{
              if(match){
                const token = jwt.sign({_id: saveduser._id}, process.env.jwt_secret)

                const {_id, username, email} = saveduser

                res.json({message: "Login Successfull", token, user:{_id, username, email}})
              }
              else{
                return res.status(422).json({ error : "Wrong Password!"})
              }
            }
          )
        }
      })
      .catch(error =>{
        console.log(error)
      })
  }
})

// User profile data route.

 router.post("/profile", (req, res)=>{
  const {email} = req.body

  User.findOne({email: email})
  .then((saveduser)=> {
    if(!saveduser){
      return res.status(404).json("User not Found")
    }
    else{
      console.log(saveduser)
      res.status(200).json({message: "User Found Successfully",user: saveduser})
    }
  })
  
 })



module.exports = router;