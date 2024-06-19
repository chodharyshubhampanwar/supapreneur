import FounderProfile from "../models/FounderProfile.js";

export const getProfile = async (username) => {
  const profile = await FounderProfile.findOne({ username });
  if (!profile) {
    throw new Error("Profile not found for this user");
  }
  return profile;
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
