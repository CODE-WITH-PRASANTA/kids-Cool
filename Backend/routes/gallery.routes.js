const express = require("express");
const router = express.Router();

const galleryController = require("../controllers//gallery.controller");
const { upload, convertToWebp } = require("../middleware/upload.middleware");

// CREATE
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  galleryController.createGallery
);

// GET
router.get("/", galleryController.getGallery);

// UPDATE
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  galleryController.updateGallery
);

// DELETE
router.delete("/:id", galleryController.deleteGallery);

module.exports = router;