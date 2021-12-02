import express from "express";
const router = express.Router();
import { authUser, registerUser} from "../controllers/userController.js"

router.post("/login", authUser)

router.post("/register", (req, res)=> {
    registerUser(req,res)})

export default router;