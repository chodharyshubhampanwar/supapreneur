import { Router } from "express";
import auth from "../middleware/auth.js";
import { getPitch, createPitch } from "../controllers/pitchController.js";

const router = Router();

router.post("/pitch", createPitch);
router.get("/:slug/pitch", getPitch);

export default router;
