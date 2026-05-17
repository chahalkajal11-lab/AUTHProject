import express from "express"
import { signUp } from "../Controller/controller.js"
import { Login} from "../Controller/UserController.js"
import Uploader from "../MIddleware/multer.js"

const  authRoutes = express.Router()

authRoutes.get("/signup",Uploader.single("image"),signUp)
authRoutes.get("/login", Login)
export default authRoutes