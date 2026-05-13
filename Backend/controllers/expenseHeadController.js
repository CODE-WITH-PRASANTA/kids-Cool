const ExpenseHead = require("../models/ExpenseHead");


// CREATE HEAD
const createExpenseHead = async (req, res) => {
  try {
    const expenseHead = await ExpenseHead.create(req.body);

    res.status(201).json(expenseHead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL HEADS
const getExpenseHeads = async (req, res) => {
  try {
    const heads = await ExpenseHead.find().sort({ createdAt: -1 });

    res.status(200).json(heads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createExpenseHead,
  getExpenseHeads,
};