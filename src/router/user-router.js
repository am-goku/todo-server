import { Router } from "express";
import { createUser, getUser, loginUser } from "../controllers/user-controller.js";
import protect from "../middleware/auth.js";
const router = Router();


//@desc     Create new user
//@route    /api/user/create-account
router.post('/create-account', createUser);


//@desc     Login user
//@route    /api/user/login-user
router.post("/login-user", loginUser);


//@desc     Fetch user
//@route    /api/user/get-user
router.get("/get-user", protect,  getUser);



export default router;