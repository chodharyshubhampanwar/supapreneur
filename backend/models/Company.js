import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Company name is required"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Company description is required"],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
  logo: String,
  links: {
    twitter: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    website: String,
  },
  location: {
    type: String,
    required: [true, "Company location is required"],
  },
});

const Company = mongoose.model("Company", CompanySchema);

export default Company;
