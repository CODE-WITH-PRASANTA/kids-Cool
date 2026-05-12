const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    head: {
      type: String,
      required: true,
    },

    accountType: {
      type: String,
    },

    accountName: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    invoice: {
      type: String,
    },

    date: {
      type: Date,
      required: true,
    },

    paymentMode: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);