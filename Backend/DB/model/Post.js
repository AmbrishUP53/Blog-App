const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId ,
        ref : "User",
        required : true
    } ,
    title : {
        type : String ,
        required : true ,
        trim : true ,
    } ,
    description : {
        type : String ,
        required : true,
    } ,
    Likes : [{
        type : mongoose.Schema.ObjectId ,
        default : "",
        ref : "User",
    }],
    disLike : [{
        type : mongoose.Schema.ObjectId ,
        ref : "User",
        deafult : ""
    }],
    comment  : [{
        user : {
            type : mongoose.Schema.ObjectId ,
            ref : "User"
        },
        text : {
            type :String ,
            required : true,
        },
        createdAt : {
            type : Date ,
            default : Date.now ,
        }
    }]
} , {timestamps : true})

module.exports = mongoose.model("Post" , postSchema);