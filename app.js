import express from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { dbConnect } from "./config/dbConnect.js"
const app = express()
app.use(express.json())
dotenv .config()

app.use("/api", authRoutes)
const port = process.env.PORT

app.listen(port ,()=>{
    console.log(`Server is run on URL:http://localhost:${port}`)
    dbConnect()
})