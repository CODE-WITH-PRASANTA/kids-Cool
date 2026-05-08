const ColdLead = require("../models/ColdLead");

// @desc    Create new cold lead
// @route   POST /api/cold-leads
// @access  Public
const createColdLead = async (req, res) => {
  try {
    const {
      parentStudentName,
      addressCity,
      phoneNumber,
      email,
      childName,
      classInterested,
      message,
    } = req.body;

    if (
      !parentStudentName?.trim() ||
      !addressCity?.trim() ||
      !phoneNumber?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Parent / Student Name, Address / City, Phone Number and Message are required.",
      });
    }

    const newColdLead = await ColdLead.create({
      parentStudentName: parentStudentName.trim(),
      addressCity: addressCity.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email?.trim() || "",
      childName: childName?.trim() || "",
      classInterested: classInterested?.trim() || "",
      message: message.trim(),
      feedback: "", // ✅ default
    });

    return res.status(201).json({
      success: true,
      message: "Cold lead created successfully.",
      data: newColdLead,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create cold lead.",
      error: error.message,
    });
  }
};

// @desc    Get all cold leads
// @route   GET /api/cold-leads
// @access  Public
const getAllColdLeads = async (req, res) => {
  try {
    const coldLeads = await ColdLead.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: coldLeads.length,
      data: coldLeads,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cold leads.",
      error: error.message,
    });
  }
};

// @desc    Get single cold lead
// @route   GET /api/cold-leads/:id
// @access  Public
const getSingleColdLead = async (req, res) => {
  try {
    const coldLead = await ColdLead.findById(req.params.id);

    if (!coldLead) {
      return res.status(404).json({
        success: false,
        message: "Cold lead not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: coldLead,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cold lead.",
      error: error.message,
    });
  }
};

// @desc    Update cold lead (FULL UPDATE + FEEDBACK SUPPORT)
// @route   PUT /api/cold-leads/:id
// @access  Public
const updateColdLead = async (req, res) => {
  try {
    const {
      parentStudentName,
      addressCity,
      phoneNumber,
      email,
      childName,
      classInterested,
      message,
      feedback, // ✅ added
    } = req.body;

    const updatedColdLead = await ColdLead.findByIdAndUpdate(
      req.params.id,
      {
        ...(parentStudentName && {
          parentStudentName: parentStudentName.trim(),
        }),
        ...(addressCity && { addressCity: addressCity.trim() }),
        ...(phoneNumber && { phoneNumber: phoneNumber.trim() }),
        ...(email !== undefined && { email: email.trim() }),
        ...(childName !== undefined && { childName: childName.trim() }),
        ...(classInterested !== undefined && {
          classInterested: classInterested.trim(),
        }),
        ...(message && { message: message.trim() }),
        ...(feedback !== undefined && {
          feedback: feedback.trim(),
        }), // ✅ important
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedColdLead) {
      return res.status(404).json({
        success: false,
        message: "Cold lead not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cold lead updated successfully.",
      data: updatedColdLead,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update cold lead.",
      error: error.message,
    });
  }
};

// @desc    Update ONLY feedback (BEST PRACTICE)
// @route   PUT /api/cold-leads/:id/feedback
// @access  Public
const updateFeedback = async (req, res) => {
  try {
    const { feedback } = req.body;

    if (!feedback?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Feedback is required",
      });
    }

    const updated = await ColdLead.findByIdAndUpdate(
      req.params.id,
      { feedback: feedback.trim() },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Cold lead not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Feedback updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update feedback",
      error: error.message,
    });
  }
};

// @desc    Delete cold lead
// @route   DELETE /api/cold-leads/:id
// @access  Public
const deleteColdLead = async (req, res) => {
  try {
    const deletedColdLead = await ColdLead.findByIdAndDelete(req.params.id);

    if (!deletedColdLead) {
      return res.status(404).json({
        success: false,
        message: "Cold lead not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cold lead deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete cold lead.",
      error: error.message,
    });
  }
};

module.exports = {
  createColdLead,
  getAllColdLeads,
  getSingleColdLead,
  updateColdLead,
  updateFeedback, // ✅ NEW EXPORT
  deleteColdLead,
};