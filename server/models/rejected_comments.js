const mongoose = require("mongoose");
const Auth = require("./authModel");

const rejectedSchema = new mongoose.Schema({
    user_email: {
        type: String,
    },

    comments: [
        {
            friend_email: String,
            friend_name: String,
            comment: String
        }
    ]
});

module.exports = mongoose.model("RejectedComments", rejectedSchema);