import express from "express";
const router = express.Router();
import { getProducts, getProductById} from "../controllers/productController.js"
import auth from "../middleware/auth.js"


router.route("/").get(getProducts)
// router.route("/").get(auth, getProducts) middleware 

router.route("/:id").get(getProductById);

export default router;
