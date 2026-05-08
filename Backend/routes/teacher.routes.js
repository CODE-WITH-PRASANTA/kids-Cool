const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const { upload, convertToWebp } = require("../middleware/upload.middleware");

// CREATE
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createTeacher
);

// GET
router.get("/", getTeachers);

// UPDATE
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  updateTeacher
);

// DELETE
router.delete("/:id", deleteTeacher);

module.exports = router;