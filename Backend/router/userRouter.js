const express = require("express");
const userRouter = express.Router();
userRouter.get("/dashboard" , (req , res)=>{
    res.send("welcome to your dashboard !!")
})
userRouter.post("/dashboard" , (req , res)=>{
    res.send("welcome to your dashboard !!")
})

// modules exports =  userRouter ;
module.exports = {userRouter}