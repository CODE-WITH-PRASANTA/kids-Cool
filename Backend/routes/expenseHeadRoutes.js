const express = require("express");

const router = express.Router();

const {
  createExpenseHead,
  getExpenseHeads,
} = require("../controllers/expenseHeadController");


// CREATE
router.post("/", createExpenseHead);

// GET ALL
router.get("/", getExpenseHeads);

module.exports = router;