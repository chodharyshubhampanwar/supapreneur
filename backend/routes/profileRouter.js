import { Router } from "express";
import {
  createProfileHandler,
  getProfileHandler,
} from "../controllers/userProfileController.js";

import auth from "../middleware/auth.js";

const router = Router();

router.post("/profile", createProfileHandler);
router.get("/profile/:id", getProfileHandler);
// Add more routes here for update, delete, etc.

export default router;
