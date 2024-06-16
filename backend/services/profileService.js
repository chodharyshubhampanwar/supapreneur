import FounderProfile from "../models/FounderProfile.js";
import User from "../models/User.js";

export const getProfile = async (id) => {
  const user = await User.findById(id).populate("profile");
  if (!user) {
    throw new Error("User not found");
  }
  if (!user.profile) {
    throw new Error("Profile not found for this user");
  }
  return user.profile;
};

export const createProfile = async (profileData) => {
  const newProfile = new FounderProfile(profileData);
  await newProfile.save();
  return newProfile;
};

export const getProfileById = async (id) => {
  const profile = await FounderProfile.findById(id);
  if (!profile) {
    throw new Error("Profile not found");
  }
  return profile;
};

// Add more profile-related business logic here as needed
