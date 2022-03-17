import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false},
}, {timestamps:true})

const user= new mongoose.model("User",userSchema);
export default user;