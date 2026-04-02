const mongoose = require("mongoose");

const coldLeadSchema = new mongoose.Schema(
  {
    parentStudentName: {
      type: String,
      required: [true, "Parent / Student Name is required"],
      trim: true,
    },
    addressCity: {
      type: String,
      required: [true, "Address / City is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    childName: {
      type: String,
      trim: true,
      default: "",
    },
    classInterested: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ColdLead", coldLeadSchema);