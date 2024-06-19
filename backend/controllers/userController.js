import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { email, username, firebaseId, type } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, username, firebaseId, type });
      await user.save();
      res.status(201).json({ message: "User created successfully", user });
    } else {
      res.status(200).json({ message: "User signed in successfully", user });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user details", error: error.message });
  }
};
