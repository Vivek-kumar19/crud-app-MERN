import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type:"string",
        required:true
    },
    lname:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    },
})

export default mongoose.model("User", userSchema );