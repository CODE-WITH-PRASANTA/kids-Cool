const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    parentName: {
      type: String,
      required: true,
      trim: true,
    },
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    // ✅ IMAGE FIELD
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);