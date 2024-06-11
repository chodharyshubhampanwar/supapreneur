import Company from "../models/Company.js";

export const createCompany = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
};

export const getCompanies = async (req, res) => {
  const companies = await Company.find({});
  res.json(companies);
};

export const upvoteCompany = async (req, res) => {
  const { id } = req.params;
  const company = await Company.findById(id);
  company.upvotes++;
  await company.save();
  res.status(200).json(company);
};
