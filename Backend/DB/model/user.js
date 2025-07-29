const Mongoose = require("mongoose");
const { trim, minLength, maxLength, email, lowercase } = require("zod");

const userSchema = new Mongoose.Schema({
    userName  :{
        type : String ,
        required : true ,
        trim : true ,
        minLength : 4 ,
        maxLength : 30
    },
    email : {
        type : String ,
        unique : true ,
        required : true ,
        lowercase : true ,
    } ,
    password : {
        type : String,
        minLength : 8,
        required : true 
    } ,
    profileImage : {
        type : String ,
        default : "https://images.pexels.com/photos/17812112/pexels-photo-17812112.jpeg",
    },
} , {timestamps : true}) ;

module.exports = Mongoose.model("User" ,userSchema);