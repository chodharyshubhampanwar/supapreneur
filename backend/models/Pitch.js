import mongoose from "mongoose";
const { Schema } = mongoose;

const PitchSchema = new Schema(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company" },
    images: [String],
    video: { type: String },
    amount: {
      type: String,
      required: [true, "Company amount is required"],
    },
    pricing: {
      type: String,
      required: [true, "Company pricing is required"],
    },
    businessModel: {
      type: String,
      required: [true, "Company business model is required"],
    },
    productDescription: {
      type: String,
    },
    companyDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pitch = mongoose.model("Pitch", PitchSchema);

export default Pitch;
