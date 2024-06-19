import mongoose from "mongoose";
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  uid: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  headline: { type: String, required: true },
  location: { type: String, required: true },
  avatar: { type: String, required: true },
  bio: { type: String, required: true },
  links: [String],
  role: { type: String, required: true },
  interests: { type: Array, required: true },
  skills: { type: Array, required: true },
  education: { type: Array, required: true },
  experience: { type: Array, required: true },
  projects: [String],
  isVerified: { type: Boolean },
  collaborating: { type: Boolean, required: true },
  criteria: [String],
});

const FounderProfile = mongoose.model("FounderProfile", ProfileSchema);

export default FounderProfile;
