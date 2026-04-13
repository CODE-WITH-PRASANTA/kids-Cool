const News = require("../models/News");

/* ================= CREATE ================= */
const createNews = async (req, res) => {
  try {
    const data = req.body;

    const news = await News.create(data);

    res.status(201).json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Create failed",
      error: error.message,
    });
  }
};

/* ================= GET ALL ================= */
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ order: 1 });

    res.json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetch failed",
    });
  }
};

/* ================= UPDATE ================= */
const updateNews = async (req, res) => {
  try {
    const updated = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Update failed",
    });
  }
};

/* ================= DELETE ================= */
const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

/* ================= TOGGLE STATUS ================= */
const toggleStatus = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    news.status = news.status === "Active" ? "Inactive" : "Active";

    await news.save();

    res.json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Status update failed",
    });
  }
};

module.exports = {
  createNews,
  getNews,
  updateNews,
  deleteNews,
  toggleStatus,
};