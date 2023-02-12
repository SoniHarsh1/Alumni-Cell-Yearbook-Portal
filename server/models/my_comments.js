const mongoose = require("mongoose");
const Auth = require("./authModel");

const mySchema = new mongoose.Schema({
    user_email :{
        type: String,
    },
    comment: [
        {
        friend_email:{
            type: String
        },
        friend_name:{
            type: String
        },
        comment:{
            type: String
        }
    }
    ]
    
});

module.exports= mongoose.model("MyComments", mySchema);