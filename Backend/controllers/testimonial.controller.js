const Testimonial = require("../models/Testimonial");

/* ================= CREATE ================= */
const createTestimonial = async (req, res) => {
  try {
    const { parentName, reviewText, rating, status } = req.body;

    const testimonial = await Testimonial.create({
      parentName,
      reviewText,
      rating,
      status,
      image: req.file?.filename || "", // ✅ image
    });

    res.status(201).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/* ================= GET ================= */
const getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= UPDATE ================= */
const updateTestimonial = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= DELETE ================= */
const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

module.exports = {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
};