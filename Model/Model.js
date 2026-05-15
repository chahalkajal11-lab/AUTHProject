import mongoose from "mongoose";

const user = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        contactNo:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            default:null
        }
})

const Main = mongoose.model("Main",user)

export default  Main