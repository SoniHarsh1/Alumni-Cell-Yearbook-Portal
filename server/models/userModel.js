const mongoose = require("mongoose");
require("dotenv").config();
const Auth = require("./authModel");
const jwt =  require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: [true, "Name is Required"],
    },

    roll_no: {
        type: String,
        required: [true, "Roll Number is required"],
        unique: true,
    },

    academic_program: {
        type: String,
        required: [true, "Academic Program is required"],
    },

    department: {
        type: String,
        required: [true, "Department is required"],
    },

    contact_details: {
        type: Number,
        required: [true, "Contact_Details is required"],
    },

    personal_email_id: {
        type: String,
        // required: [true, "Department is required"],
        unique: true,
    },

    current_company: {
        type: String,
    },

    designation: {
        type: String,
    },

    about: {
        type: String,
        // required: true,
    },

    profile_img: {
        type: String,
        // required: [true, "Profile_image is required"],
    },

    verified: {
        type: Boolean,
        required: true,
        default: false
    }
});

userSchema.methods.generateVerificationToken = function () {
    const user = this;
    const verificationToken = jwt.sign(
        {ID: user._id},
        process.env.SECRET,
        {expiresIn: "7d"}
    );

    return verificationToken;
}

module.exports= mongoose.model("Users", userSchema);