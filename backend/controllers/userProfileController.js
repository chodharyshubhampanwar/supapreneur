import {
  createProfile,
  getProfile,
  getProfileById,
} from "../services/profileService.js";
import { profileSchema } from "../validators/profileValidator.js";

export const getProfileHandler = async (req, res) => {
  try {
    const profile = await getProfile(req.user.id);
    res.status(200).json(profile);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching profile", error: error.message });
  }
};

export const createProfileHandler = async (req, res) => {
  const { error } = profileSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const newProfile = await createProfile(req.body);
    res
      .status(201)
      .json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating profile", error: error.message });
  }
};

// export const getProfileHandler = async (req, res) => {
//   try {
//     const profile = await getProfileById(req.params.id);
//     res.status(200).json(profile);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching profile", error: error.message });
//   }
// };

// More handlers for updating and deleting profiles can be added here
