const express = require("express");
const userRouter=express.Router();
const users=require("../userlist");
 
//get user
userRouter.get("/",(req,res)=>res.send({Listusers:users}))
    const hours=date.getHours();
    if(hours>9 && hours<18 ){
        res.render("opened");}else { res.render("closed");}

//post user
userRouter.get("/login",(req,res)=>
{
    let email=req.body.email;
    let password=req.body.password;
    res.send({msj:`your email is ${email} and your password is ${password}`}); 
})
 user.get("/Email", (req, res) => {res.render("Email");});
//delete user
// update user
module.exports = userRouter;