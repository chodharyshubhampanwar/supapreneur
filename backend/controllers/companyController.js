import Company from "../models/Company.js";
import Upvote from "../models/Upvote.js";

export const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}).sort({ upvotes: -1 }).limit(30);
    res.json({ companies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const upvoteCompany = async (req, res) => {
  const companyId = req.params.id;
  const userId = req.user.userId;

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    const upvote = await Upvote.findOne({ userId, companyId });

    if (upvote) {
      await Upvote.deleteOne({ userId, companyId });
      company.upvotes -= 1;
    } else {
      const newUpvote = new Upvote({ userId, companyId });
      await newUpvote.save();
      company.upvotes += 1;
    }

    await company.save();
    res.json({ upvotes: company.upvotes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update upvote" });
  }
};

export const getCompany = async (req, res) => {
  const slug = req.params.slug;
  try {
    const company = await Company.findOne({ slug });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get company" });
  }
};
