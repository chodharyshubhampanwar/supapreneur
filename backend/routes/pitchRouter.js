import { Router } from "express";
import auth from "../middleware/auth.js";
import { getPitch, createPitch } from "../controllers/pitchController.js";

const router = Router();

router.post("/pitch", createPitch);
router.get("/pitch", getPitch);

// router.put("/companies/:id/upvote", auth, upvoteCompany);
// router.get("/companies/:slug", getCompany);

export default router;
