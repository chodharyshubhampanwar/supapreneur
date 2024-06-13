import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { email, username, firebaseId, type } = req.body;

    const newUser = new User({
      email,
      username,
      firebaseId,
      type,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
