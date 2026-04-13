const Teacher = require("../models/Teacher");

/* ================= CREATE ================= */
const createTeacher = async (req, res) => {
  try {
    const { name, role, description, phone, status } = req.body;

    const teacher = await Teacher.create({
      name,
      role,
      description,
      phone,
      status,
      image: req.file?.filename || "",
    });

    res.status(201).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Create failed",
      error: error.message,
    });
  }
};

/* ================= GET ================= */
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

/* ================= UPDATE ================= */
const updateTeacher = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

/* ================= DELETE ================= */
const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

module.exports = {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};