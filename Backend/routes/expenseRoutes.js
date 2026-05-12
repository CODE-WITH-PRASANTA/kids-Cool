const express = require("express");

const router = express.Router();

const {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");


// CREATE
router.post("/", createExpense);

// GET ALL
router.get("/", getExpenses);

// GET SINGLE
router.get("/:id", getExpenseById);

// UPDATE
router.put("/:id", updateExpense);

// DELETE
router.delete("/:id", deleteExpense);

module.exports = router;