import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const auth = (req, res, next) =>{
    const { auth } = req.headers
    jwt.verify(auth, process.env.SECRET, (error, decoded)=>{
        if(error) return res.status(401).send("Can't you access")
        req.user = decoded 
        console.log("Authenticated")
        next()
    })
}

export default auth