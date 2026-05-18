import express from "express"
import { signUp } from "../Controller/controller.js"
import { getAllUser, getSingleUser, Login} from "../Controller/UserController.js"
import Uploader from "../MIddleware/multer.js"

const  authRoutes = express.Router()

authRoutes.post("/signup", Uploader.single("image"), signUp);
authRoutes.post("/login", Login)
authRoutes.get("/users", getAllUser)
authRoutes.get("/user/:id", getSingleUser)
export default authRoutes