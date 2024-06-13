import mongoose from "mongoose";

const { Schema } = mongoose;

const UpvoteSchema = new Schema({
  userId: { type: String, required: true, index: true },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
    index: true,
  },
});

const Upvote = mongoose.model("Upvote", UpvoteSchema);

export default Upvote;
