import { Router } from "express";
import { createUser, loginUser } from "../controllers/user-controller.js";

const router = Router();


//@desc     Create new user
//@route    /api/user/create-account
router.post('/create-account', createUser);


//@desc     Login user
//@route    /api/user/login-user
router.post("/login-user", loginUser);



export default router;