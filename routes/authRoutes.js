import express from "express"
import { signUp } from "../Controller/controller.js"
import {  Login} from "../Controller/UserController.js"
import Uploader from "../MIddleware/multer.js"

const authRoutes = express.Router()

authRoutes.get("/signup",(req,res)=>{
   res.send("Signup Route Working 🚀")
})

authRoutes.post("/signup",Uploader.single("image"),signUp)

authRoutes.get("/login",(req,res)=>{
   res.send("Login Route Working 🚀")
})

authRoutes.post("/login", Login)

export default authRoutes