import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firebaseId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["founder", "investor", "operator"],
      required: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile", // Reference to the Profile model
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
