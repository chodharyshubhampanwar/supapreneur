import { Router } from "express";
import {
  getCompanies,
  createCompany,
  upvoteCompany,
} from "../controllers/companyController.js";

const router = Router();

router.get("/companies", getCompanies);
router.post("/companies", createCompany);
router.put("/companies/:id/upvote", upvoteCompany);

export default router;
