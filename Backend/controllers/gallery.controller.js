const Gallery = require("../models/gallery.model");
const fs = require("fs");
const path = require("path");

// CREATE
exports.createGallery = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const newGallery = await Gallery.create({
      image: req.file.filename,
    });

    res.status(201).json({
      success: true,
      data: newGallery,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    // DELETE OLD IMAGE
    if (req.file) {
      const oldPath = path.join("uploads", gallery.image);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }

      gallery.image = req.file.filename;
    }

    await gallery.save();

    res.json({
      success: true,
      data: gallery,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);

    if (!gallery) {
      return res.status(404).json({ message: "Not found" });
    }

    const filePath = path.join("uploads", gallery.image);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await gallery.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};