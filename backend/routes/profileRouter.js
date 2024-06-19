import { Router } from "express";
import {
  createProfileHandler,
  getProfileHandler,
} from "../controllers/userProfileController.js";

import auth from "../middleware/auth.js";

const router = Router();

router.post("/profile", createProfileHandler);
router.get("/profile/:username", getProfileHandler);

export default router;
