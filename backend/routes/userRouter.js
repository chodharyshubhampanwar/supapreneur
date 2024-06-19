import { Router } from "express";
import { createUser, getUser } from "../controllers/userController.js";

const router = Router();

router.post("/users", createUser);
router.get("/user/:username", getUser);

export default router;
