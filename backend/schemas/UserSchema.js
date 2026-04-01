const { Schema } = require("mongoose");

const UserSchema = new Schema({
    email:{
        type:String,
        required:[true, "Your email address is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true, "Your username is required"],
    },
    password:{
        type:String,
        required:[true, "Your Password is required"],
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
});

module.exports = { UserSchema };