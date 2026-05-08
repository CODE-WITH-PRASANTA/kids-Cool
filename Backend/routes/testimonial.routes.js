const express = require("express");
const router = express.Router();

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");

const { upload, convertToWebp } = require("../middleware/upload.middleware");

router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createTestimonial
);

router.get("/", getTestimonials);

router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  updateTestimonial
);

router.delete("/:id", deleteTestimonial);

module.exports = router;