import express from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { dbConnect } from "./config/dbConnect.js"
const app = express()
app.use(express.json())
dotenv .config()

app.use("/api", authRoutes)
const port = process.env.PORT
app.get("/", (req, res) => {
  res.send("Auth API is running ");
});
app.listen(port ,()=>{
    console.log(`Server is run on URL:http://localhost:${port}`)
    dbConnect()
})