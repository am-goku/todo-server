import { Router } from "express";
import { refreshAccess } from "../controllers/auth-controller.js";

const router = Router();

//@desc     Refresh Access Token
//@route    GET /api/auth/refresh-token
router.get("/refresh-token", refreshAccess)


export default router;
