const News = require("../models/News");

/* ======================================================
   CREATE NEWS
====================================================== */

const createNews = async (req, res) => {
  try {

    console.log("BODY:", req.body);

    const {
      image,
      date,
      title,
      category,
      description,
      buttonText,
      link,
      status,
      featured,
      order,
    } = req.body;

    /* ================= VALIDATION ================= */

    if (!title || !description || !date) {
      return res.status(400).json({
        success: false,
        message:
          "Title, description and date are required",
      });
    }

    /* ================= CREATE ================= */

    const news = await News.create({
      image,
      date,
      title,
      category,
      description,
      buttonText,
      link,
      status,
      featured,
      order,
    });

    return res.status(201).json({
      success: true,
      data: news,
    });

  } catch (error) {

    console.log(
      "CREATE NEWS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   GET ALL NEWS
====================================================== */

const getNews = async (req, res) => {
  try {

    const news = await News.find().sort({
      order: 1,
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: news,
    });

  } catch (error) {

    console.log(
      "GET NEWS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   UPDATE NEWS
====================================================== */

const updateNews = async (req, res) => {
  try {

    const updated = await News.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      data: updated,
    });

  } catch (error) {

    console.log(
      "UPDATE NEWS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   DELETE NEWS
====================================================== */

const deleteNews = async (req, res) => {
  try {

    await News.findByIdAndDelete(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });

  } catch (error) {

    console.log(
      "DELETE NEWS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================================================
   TOGGLE STATUS
====================================================== */

const toggleStatus = async (req, res) => {
  try {

    const news = await News.findById(
      req.params.id
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    news.status =
      news.status === "Active"
        ? "Inactive"
        : "Active";

    await news.save();

    return res.status(200).json({
      success: true,
      data: news,
    });

  } catch (error) {

    console.log(
      "STATUS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
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