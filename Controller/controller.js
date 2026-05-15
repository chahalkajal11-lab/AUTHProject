import Main from "../Model/Model.js";
import bcrypt from "bcrypt"
import { generateJWT } from "../help/help.js";
import { cloufinaryFun } from "../MIddleware/cloudinary.js";

export const signUp = async (req, res) => {
     
    try {
        const { name, age, address, contactNo, password, email } = req.body;
        let image = await cloufinaryFun(req.file.path)
        console.log(req.file.path)
        if (!name || !age || !address || !contactNo || !email || !password) {
            return res.status(400).json({
                status: "Fail",
                message: "Please fill all required fields"
            });
        }

        let isExist = await Main.findOne({ email });
        if (isExist) {
            return res.status(400).json({
                status: "Fail",
                message: "This user already exists"
            });
        }
   
          let hashedPass = await bcrypt.hash(password,10)
                console.log(hashedPass) 

        const user = await Main.create({
            name,
            age,
            address,
            contactNo,
            email,
            password:hashedPass
        });
       if(user){
        let token = generateJWT(user)
        console.log(token)
        res.cookie("token",token)
       }

        res.status(200).json({
            status: "Success",
            message: "signed up successfully",
            data: user
        });

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message:`Error ${error.message}`
        });
    }
};