import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
//const  SECRET = "test"

// @desc authenticate user and get a token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  
   const {email, password} = req.body

   const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
       res.json({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin,
           token: jwt.sign({
               name : user.name}, process.env.SECRET, {expiresIn: "10m"}
           )
       })

   } else {
       res.status(401)
       throw new Error("invalid email or password")
   }
});


const registerUser = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body
    console.log(req)
    let foundUser = await User.findOne({ email })
    if(!foundUser){
        bcrypt.hash(password, 10, (error, hash)=>{
            if(error) return res.status(500).send(error)
            let user = new User({
                name : name,
                email: email,
                password: hash
            })
            user.save((error) => {
                if(error){
                    res.status(500).send("Server an error in save")
                }
                res.status(200).send("OK")
            })
        })
    }
    else{
        res.status(404).send("There is already!")
    }
})



export {
    authUser,
    registerUser
}






