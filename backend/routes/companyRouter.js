import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  getCompanies,
  createCompany,
  upvoteCompany,
  getCompany,
} from "../controllers/companyController.js";

const router = Router();

router.get("/companies", getCompanies);
router.post("/companies", createCompany);
router.put("/companies/:id/upvote", auth, upvoteCompany);
router.get("/companies/:slug", getCompany);

export default router;
