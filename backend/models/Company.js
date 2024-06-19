import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      unique: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: [true, "Company description is required"],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    tags: [String],
    logo: String,
    links: {
      pitch: String,
      twitter: String,
      facebook: String,
      instagram: String,
      linkedin: String,
      website: String,
      ios: String,
      android: String,
    },
    location: {
      type: String,
      required: [true, "Company location is required"],
    },
    stage: {
      type: String,
      required: [true, "Company stage is required"],
    },
    teamSize: {
      type: String,
      required: [true, "Company team size is required"],
    },
    founded: {
      type: String,
      required: [true, "Company location is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["idea"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    pitchId: {
      type: Schema.Types.ObjectId,
      ref: "Pitch",
    },
  },
  { timestamps: true }
);

CompanySchema.pre("validate", function (next) {
  if (this.isModified("name") || !this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Company = mongoose.model("Company", CompanySchema);

export default Company;
